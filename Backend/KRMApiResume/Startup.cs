using KRMApiResume.Data;
using KRMDataManager.Library.DataAccess;
using KRMDataManager.Library.Interfaces;
using KRMDataManager.Library.Internal.DataAccess;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KRMApiResume
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //Raises services as a singleton. Only one instance of DBClient during our program
            /*
             In the preceding code, the BooksService class is 
            registered with DI to support constructor injection in consuming classes. 
            The singleton service lifetime is most appropriate 
            because BooksService takes a direct dependency on MongoClient. 
            Per the official Mongo Client reuse guidelines, MongoClient should 
            be registered in DI with a singleton service lifetime.
             */
            services.AddSingleton<IDbClient, DbClient>();


            //Configuration for Data Access for MongoDb
            services.Configure<MongoDataAccess>(Configuration.GetSection("BookStoreDatabase"));
            //For services to work for BookCollection
            /*
             With a transient service, 
            a new instance is provided every time a service 
            instance is requested whether it is in the scope of the same 
            HTTP request or across different HTTP requests.*/
            services.AddTransient<IBookServices, BookDataServices>();


            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));
            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<ApplicationDbContext>();
            services.AddControllersWithViews();
            services.AddRazorPages();

            services.AddSwaggerDocument(settings =>
            {
                settings.Title = "Karl Api";
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            //Setup for swagger
            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }
    }
}
