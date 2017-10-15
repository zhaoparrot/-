<%@ WebHandler Language="C#" Class="GetHandler" %>

using System;
using System.Web;
using System.IO;
using System.Text;

public class GetHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        try
        {

            FileStream fsini = new FileStream(@"D:\lineSpecs.json", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            StreamReader srini = new StreamReader(fsini, Encoding.UTF8);
            string json=srini.ReadLine();
            srini.Dispose();
            fsini.Dispose();

            context.Response.ContentType = "text/plain";
            context.Response.Write(json);
        }
        catch(Exception e)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(e.Message);
        }

    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}