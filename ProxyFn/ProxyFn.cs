using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace ProxyFn;

public static class ProxyFn
{
    private static HttpClient _client;
        
    private static string URL =>
        "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

    private static HttpClient Client => _client ??= new HttpClient();

    [FunctionName("ProxyFn")]
    public static async Task<string> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
        ILogger log)
    {
        var result = await Client.GetAsync(URL);
        var content = await result.EnsureSuccessStatusCode().Content.ReadAsStringAsync();

        return content;
    }
}