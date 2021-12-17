using KRMDataManager.Library.DataAccess;
using KRMDataManager.Library.Interfaces;
using KRMDataManager.Library.Internal.DataAccess;
using KRMDesktopUI.ViewModels;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;

namespace KRMDesktopUI
{



  
    // <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
     {

        public App()
        {

            var builder = Host.CreateDefaultBuilder()
                .ConfigureServices((hostContext, services) =>
                {

                    services.AddScoped<IMongoDbContext, MongoDBContext>();
                    services.AddSingleton<MainWindow>();
                });

            var host = builder.Build();

            using (var serviceScope = host.Services.CreateScope())
            {
                var services = serviceScope.ServiceProvider;
                try
                {
                    var masterWindow = services.GetRequiredService<MainWindow>();
                    masterWindow.Show();

                    Console.WriteLine("Success");
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error Occured" + ex.Message);
                }
            }
        }
/* 

        //Very Good Example to do Fo rmongo DB
        //https://www.thecodebuzz.com/wpf-mongodb-csharp-with-example/
        //https://thecodebuzz.com/mongodb-repository-implementation-unit-testing-net-core-example/
        //https://www.youtube.com/watch?v=3EzHn9ir5M8&list=PLA8ZIAm2I03jSfo18F7Y65XusYzDusYu5&index=10
        //private ServiceProvider serviceProvider;
        private readonly IHost host;
        public App()
        {
            host = Host.CreateDefaultBuilder().ConfigureServices((context, services) =>
            {
                ConfigureServices(context.Configuration, services);
            }).Build();
         
        }

        private void ConfigureServices(IConfiguration configuration, IServiceCollection services )
        { 
           
            //All dependencies can be added to the DI system 
           services.AddScoped<IMongoDbContext, MongoDBContext>();

            services.Configure<MongoDataAccess>(configuration.GetSection("BookStoreDatabase"));


            //services.AddSingleton<IDbClient, DbClient>();
            services.AddTransient<IBookServices, BookDataServices>();
          
            //services.Configure<MongoDataAccess>(Configuration.GetSection("BookStoreDatabase"));
            services.AddSingleton<MainWindow>();
        }

        protected override async void OnStartup(StartupEventArgs e)
        {
            await host.StartAsync();

            var mainWindow = host.Services.GetRequiredService<MainWindow>();

            mainWindow.Show();

            base.OnStartup(e);
        }

        protected override async void OnExit (ExitEventArgs e)
        {
            using (host)
            {
                await host.StopAsync(TimeSpan.FromSeconds(5));
            }
            base.OnExit(e);
        }*/
       
    }
}
