<?php

namespace Core\Http\Controllers;

use AppLoader;

use Core\Models\Themes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SystemController extends Controller
{
    /**
     * Will clear system  cache
     */
    public function clearSystemCache()
    {
        try {
            cache_clear();
            toastNotification('success', translate('Cache clear successfully'));
            return redirect()->back();
        } catch (\Exception $e) {
            toastNotification('error', translate('Cache clear failed'));
        }
    }

    /**
     * Will clear system  cache
     */
    public function clearSystemCacheFromApi()
    {
        try {
            cache_clear();
            return response()->json(
                [
                    'success' => true,
                ]
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'success' => false,
                ]
            );
        }
    }

    public function activateLicense(Request $request)
    {
        $request->validate([
            'license' => 'required'
        ]);

        $res = AppLoader::createApp($request['license'], false);
        if ($res == 'SUCCESS') {
            $this->updateSystemVersion(systemLatestVersion());
            $this->updatePluginVersion(systemLatestVersion(), $request['license']);
            $this->updateThemeVersion(systemLatestVersion(), $request['license']);
            $this->setProductSeller();
            return redirect()->route('core.admin.welcome');
        }

        return $res;
    }

    public function storePurchaseKey(Request $request)
    {
        $request->validate([
            'license' => 'required'
        ]);

        return  AppLoader::validateApp($request['license']);
    }

    /**
     * Will update system version
     */

    public function updateSystemVersion($updated_version)
    {
        try {
            DB::beginTransaction();
            $version_setting_id = getGeneralSettingId('system_version');
            $version_data = [
                'settings_id' => $version_setting_id,
                'value' => $updated_version
            ];
            //Delete Exiting Version
            DB::table('tl_general_settings_has_values')
                ->where('settings_id', $version_setting_id)
                ->delete();

            //Store new Version
            DB::table('tl_general_settings_has_values')
                ->where('settings_id', $version_setting_id)
                ->insert($version_data);
            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        } catch (\Error $e) {
            DB::rollBack();
            return false;
        }
    }

    /**
     * Will updated plugin versions
     */
    public function updatePluginVersion($updated_version, $purchase_key)
    {
        try {
            DB::beginTransaction();
            Plugin::whereNot('location', 'multivendor')->update(
                [
                    'version' => $updated_version,
                    'unique_indentifier' => $purchase_key
                ]
            );
            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        } catch (\Error $e) {
            DB::rollBack();
            return false;
        }
    }
    /**
     * Will updated theme versions
     */
    public function updateThemeVersion($updated_version, $purchase_key)
    {
        try {
            DB::beginTransaction();
            Themes::query()->update(
                [
                    'version' => $updated_version,
                    'unique_indentifier' => $purchase_key
                ]
            );

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        } catch (\Error $e) {
            DB::rollBack();
            return false;
        }
    }

    /**
     * Will set products seller
     */
    public function setProductSeller()
    {
        //Update Product
        \Plugin\TlcommerceCore\Models\Product::whereNull('supplier')->update(
            [
                'supplier' => getSupperAdminId()
            ]
        );

        //Update order products
        \Plugin\TlcommerceCore\Models\OrderHasProducts::whereNull('seller_id')->update(
            [
                'seller_id' => getSupperAdminId()
            ]
        );
    }
}
