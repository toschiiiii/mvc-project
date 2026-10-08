using System.Diagnostics;
using DotolloGuiangRodulfa_MVCProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotolloGuiangRodulfa_MVCProject.Controllers
{
    public class ShannelController : Controller
    {
        private readonly ILogger<ShannelController> _logger;

        public ShannelController(ILogger<ShannelController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // public IActionResult Profile()
        // {
        //     return View();
        // }

        // public IActionResult Portfolio()
        // {
        //     return View();
        // }

        public IActionResult ShannelProfile()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
