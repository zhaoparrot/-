<%@ WebHandler Language="C#" Class="GetHandler" %>

using System;
using System.Web;
using System.IO;
using System.Text;
using System.Linq;
public class GetHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        try
        {

            string veridstr = "0", auther = "system", info = "", subtime="",submitIP = "";
            if (File.Exists(@"d:\lineDir\his.txt"))
            {
                //获取最新版本号
                //FileStream idfs = new FileStream(@"D:/linemap/history.txt", FileMode.OpenOrCreate);
                string lastverstr = System.IO.File.ReadAllLines(@"d:\lineDir\his.txt").Last();
                string[] sArray = lastverstr.Split('$');

                for (int i = 0; i < sArray.Length; i++)
                {
                    if (i == 0)
                    { veridstr = sArray[i]; continue; }
                    else if (i == 1)
                    { auther = sArray[i]; continue; }
                    else if (i == 2)
                    { subtime = sArray[i]; continue; }
                    else if (i == 3)
                    { submitIP = sArray[i]; continue; }
                    else
                    { info += sArray[i]; continue; }
                }
            }
            FileStream fsini = new FileStream(@"D:\lineDir\"+veridstr+".txt", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            StreamReader srini = new StreamReader(fsini, Encoding.UTF8);
            string json=srini.ReadLine();
            srini.Dispose();
            fsini.Dispose();
            string userIP;
            // HttpRequest Request = HttpContext.Current.Request;  
            HttpRequest Request = HttpContext.Current.Request; // ForumContext.Current.Context.Request;  
                                                               // 如果使用代理，获取真实IP  
            if (Request.ServerVariables["HTTP_X_FORWARDED_FOR"] != "")
                userIP = Request.ServerVariables["REMOTE_ADDR"];
            else
                userIP = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (userIP == null || userIP == "")
                userIP = Request.UserHostAddress;
            FileStream fshis= new FileStream(@"D:\lineDir\log.txt", FileMode.Append, FileAccess.Write, FileShare.ReadWrite);
            System.IO.StreamWriter file = new System.IO.StreamWriter(fshis, Encoding.UTF8);
            file.WriteLine(DateTime.Now+"$"+userIP+"$"+veridstr);
            file.Dispose();
            json = "{\"id\":\""+veridstr+"\",\"allline\":" + json + ",\"subtime\":\""+subtime+"\",\"subinfo\":\""+info+"\"}";
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