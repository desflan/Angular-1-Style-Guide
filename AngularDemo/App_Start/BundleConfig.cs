using System.Web;
using System.Web.Optimization;

namespace AngularDemo
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/angular-toastr.min.css"));


            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                     "~/Scripts/angular.min.js",
                     "~/Scripts/angular-ui-router.min.js",
                      "~/Scripts/ui-grid.min.js",
                      "~/Scripts/angular-toastr.tpls.min.js",
                      "~/Scripts/angular-animate.min.js"
                    ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                    "~/app/app.module.js",
                    "~/app/core/core.module.js",
                    "~/app/core/config.js",
                    "~/app/core/constants.js",
                    "~/app/home/homeController.js",
                    "~/app/view/viewController.js",
                    "~/app/add/addController.js",
                    "~/app/userprofile/userProfileController.js",
                    "~/app/notification/notification.module.js",
                    "~/app/notification/notification.service.js"));
        }
    }
}
