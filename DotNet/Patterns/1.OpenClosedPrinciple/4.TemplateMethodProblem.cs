using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Patterns.TemplateMethod.Problem
{
    class FileSystemUploader
    {
        public virtual void UploadFile(byte[] fileContent)
        {
            if (fileContent == null)
                throw new ArgumentException("Kan niet null zijn", nameof(fileContent));

            // TODO: Put file on network share
        }
    }



    class FtpUploader : FileSystemUploader
    {
        public override void UploadFile(byte[] fileContent)
        {
            // Code repeated from FileSystemUploader ==> Not DRY!
            if (fileContent == null)
                throw new ArgumentException("Kan niet null zijn", nameof(fileContent));

            // TODO: Upload the file
        }
    }



    class DropBoxUploader : FileSystemUploader
    {
        public override void UploadFile(byte[] fileContent)
        {
            // Also not dry when using inheritance: Forced to call the base!
            base.UploadFile(fileContent);

            // Do other interesting stuff
            Console.WriteLine("_dropBox.GetPublicShareUrl();");
        }
    }
}
