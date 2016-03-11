using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FishTankApp.Services;

namespace FishTankApp.Controllers
{
    public class HomeController : Controller
    {
        private IViewModelService viewModelService;

        public HomeController(IViewModelService viewModelService)
        {
            this.viewModelService = viewModelService;
        }
            
            

        public IActionResult Index()
        {
            ViewBag.Title = "Fish Tank Dashboard";
            return View(viewModelService.GetDashboardViewModel());
        }

        public IActionResult Feed(int foodamount)
        {
            var model = viewModelService.GetDashboardViewModel();
            model.LastFed = $"{DateTime.Now.Hour}:{DateTime.Now.Minute}. Amount: {foodamount}";
            return View("Index", model);
        }
    }
}
