<%@ WebHandler Language="C#" Class="SaveHandler" %>

using System;
using System.Web;
using System.IO;
using System.Text;
using System.Linq;

public class SaveHandler : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        try
        {
            if (String.IsNullOrEmpty(context.Request["datatoSave"]))
                throw (new Exception("提交信息为空"));
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

            int verid = int.Parse(veridstr);
            int submitid = int.Parse(context.Request["currentid"]);
            if (verid > submitid)
            {
                context.Response.ContentType = "text/plain";
                context.Response.Write("抱歉！刚刚有其他用户提交了新版本，为了避免意外覆盖掉别人的提交，请您先刷新页面再试。");
                return;
            }
            //生成新信息
            string newID = (verid + 1).ToString();
            //获取IP
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
            FileStream fshis = new FileStream(@"D:\lineDir\his.txt", FileMode.Append, FileAccess.Write, FileShare.ReadWrite);
            System.IO.StreamWriter file = new System.IO.StreamWriter(fshis, Encoding.UTF8);
            file.WriteLine(newID.ToString() + "$" + context.Request["auther"].ToString() + "$"+DateTime.Now+"$" + userIP + "$" + context.Request["infotxt"].ToString());
            file.Dispose();

            FileStream fsini = new FileStream(@"D:\lineDir\" + newID.ToString() + ".txt", FileMode.Create, FileAccess.Write, FileShare.ReadWrite);
            StreamWriter srini = new StreamWriter(fsini, Encoding.UTF8);
            srini.WriteLine(context.Request["datatoSave"].ToString());
            srini.Dispose();
            fsini.Dispose();


            context.Response.ContentType = "text/plain";
            context.Response.Write("您提交的信息已保存，感谢您对本项目的贡献！");
        }
        catch (Exception e)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(e.Message);
        }

    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}