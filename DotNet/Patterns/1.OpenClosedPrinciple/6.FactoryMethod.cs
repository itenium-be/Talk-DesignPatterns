using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Patterns.FactoryMethod
{
    abstract class UploaderBase
    {
        public UploadResult UploadFile(byte[] fileContent)
        {
            if (fileContent == null)
                throw new ArgumentException("Kan niet null zijn", nameof(fileContent));

            SetUpHook();
            UploadResult result = UploadFileCore(fileContent);
            BreakDownHook();
            return result;
        }

        protected virtual void SetUpHook() { }

        protected abstract UploadResult UploadFileCore(byte[] fileContent);

        protected virtual void BreakDownHook() { }
    }



    class UploadResult
    {
        public UploadResult(string location) { Location = location; }
        public string Location { private set; get; }
    }



    class FtpUploader : UploaderBase
    {
        protected override void SetUpHook()
        {
            // Connect to FTP server
        }

        protected override UploadResult UploadFileCore(byte[] fileContent)
        {
            string location = ""; // _ftp.PutFreeFile(fileContent);
            return new UploadResult(location);
        }

        protected override void BreakDownHook()
        {
            // Close FTP connection
        }
    }



    class DropBoxUploader : UploaderBase
    {
        public const string RootDropBoxFolder = @"c:\dropbox\";

        protected override UploadResult UploadFileCore(byte[] fileContent)
        {
            string location = RootDropBoxFolder + "file.txt";
            File.WriteAllBytes(location, fileContent);
            return new DropBoxUploadResult(location, "_dropBox.GetPublicShare(RootDropBoxFolder)");
        }

        class DropBoxUploadResult : UploadResult
        {
            public string PublicShareUrl { private set; get; }
            public DropBoxUploadResult(string location, string publicShareUrl)
                : base(location)
            {
                PublicShareUrl = publicShareUrl;
            }
        }
    }
}
