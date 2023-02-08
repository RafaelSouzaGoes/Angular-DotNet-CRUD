using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<SuperHero> SuperHeroes => Set<SuperHero>();

    }

}
