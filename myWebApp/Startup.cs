using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Data.SqlClient;
using static System.IO.StreamReader;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;

namespace myWebApp
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
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapPost("/postDetails", async context =>
                {
                    using StreamReader reader = new StreamReader (context.Request.Body);
                    string body = await reader.ReadToEndAsync ();
                    JObject req = JObject.Parse(body);
                    string qr="insert into devotees([fName],[lName],[mobile],[city]) values(\'"+req["fName"]+"\',\'"+req["lName"]+"\',\'"+req["mobile"]+"\',\'"+req["city"]+"\')";
                    Console.WriteLine(qr);
                    string connetionString = null;
                    SqlConnection cnn ;
                    SqlCommand com ;
                    connetionString = "Data Source=localhost;Initial Catalog=test;User ID=client;Password=client5";
                    cnn = new SqlConnection(connetionString);
                    try
                    {
                    cnn.Open();
                    Console.WriteLine("Connection Open ! ");
                    com = new SqlCommand(qr, cnn);
                    com.ExecuteNonQuery();
                    com.Dispose();
                    cnn.Close();
                    }
                    catch (Exception ex)
                    {
                    Console.WriteLine("Can not open connection ! ");
                    }
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }
    }
}
