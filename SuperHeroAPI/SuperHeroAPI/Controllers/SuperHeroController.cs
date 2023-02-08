using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHeroAPI.Data;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly AppDbContext _context;
        public SuperHeroController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHero()
        {
            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> CreateSuperHero(SuperHero hero)
        {
            _context.SuperHeroes.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateHero(SuperHero hero)
        {
            var dbhero = await _context.SuperHeroes.FindAsync(hero.Id);

            if (dbhero == null) return BadRequest("Heroi não Encontrado");

            dbhero.Name = hero.Name;
            dbhero.FirstName = hero.FirstName;
            dbhero.LastName = hero.LastName;
            dbhero.Place = hero.Place;

            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> DeleteHero(int id)
        {
            var dbhero = await _context.SuperHeroes.FindAsync(id);

            if (dbhero == null) return BadRequest("Heroi não encontrado");

            _context.SuperHeroes.Remove(dbhero);

            await _context.SaveChangesAsync();
            return Ok(await _context.SuperHeroes.ToListAsync());

        }


    }
}
