using Microsoft.AspNetCore.Mvc;
using ZooAPI.Model;
using ZooAPI.Service;

namespace ZooAPI.Controller
{
    [ApiController]
    [Route("api/[controller]")] 
    public class ZoobesucherController : ControllerBase
    {
        private readonly ZoobesucherService _service;

        
        public ZoobesucherController(ZoobesucherService service)
        {
            _service = service;
        }

        
        [HttpGet("tiere")] 
        public async Task<ActionResult<List<Tier>>> GetAllTiere()
        {
            return await _service.GetAllTiere();
        }

        [HttpGet("tiere/{gattung}")] 
        public async Task<ActionResult<Tier>> GetTierByGattung(string gattung)
        {
            var tier = await _service.GetTierByGattung(gattung);
            if (tier == null)
            {
                return NotFound();
            }

            return tier;
        }
    }
}