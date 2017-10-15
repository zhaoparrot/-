<%@ WebHandler Language="C#" Class="SaveHandler" %>

using System;
using System.Web;
using System.IO;
using System.Text;

public class SaveHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        try
        {
            if (String.IsNullOrEmpty(context.Request["datatoSave"]))
                return;
            FileStream fsini = new FileStream(@"D:\lineSpecs.json", FileMode.Create, FileAccess.Write, FileShare.ReadWrite);
            StreamWriter srini = new StreamWriter(fsini, Encoding.UTF8);
            srini.WriteLine(context.Request["datatoSave"].ToString());
            srini.Dispose();
            fsini.Dispose();

            context.Response.ContentType = "text/plain";
            context.Response.Write("您提交的信息已保存，感谢您对本项目的贡献！");
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