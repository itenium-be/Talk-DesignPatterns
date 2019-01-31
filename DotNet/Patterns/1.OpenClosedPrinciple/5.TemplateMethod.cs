using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

// Definition Template Method:
// Define the skeleton of an algorithm in an operation, deferring some steps to subclasses
// Template Method lets subclasses redefine certain steps of an algorithm without changing
// the algorithm’s structure.

namespace Patterns.TemplateMethod
{
    abstract class UploaderBase
    {
        public void UploadFile(byte[] fileContent) // <-- The operation
        {
            // Defining the skeleton of an algorithm
            if (fileContent == null)
                throw new ArgumentNullException(nameof(fileContent));

            // Deferring some steps to subclasses
            SetUpHook();
            UploadFileCore(fileContent);
            BreakDownHook();
        }

        // Three Template Methods:
        protected virtual void SetUpHook() { }
        protected abstract void UploadFileCore(byte[] fileContent);
        protected virtual void BreakDownHook() { }
    }



    // Let these subclasses redefine certain steps of the algorithm (=UploadFile)
    class FileSystemUploader : UploaderBase
    {
        protected override void UploadFileCore(byte[] fileContent)
        {
            File.WriteAllBytes(@"c:\temp\file.txt", fileContent);
        }
    }


    class FtpUploader : UploaderBase
    {
        protected override void SetUpHook()
        {
            // Connect to FTP server
        }

        protected override void UploadFileCore(byte[] fileContent)
        {
            // _ftp.PutFreeFile(fileContent);
        }

        protected override void BreakDownHook()
        {
            // Close FTP connection
        }
    }


    class DropBoxUploader : UploaderBase
    {
        public const string RootDropBoxFolder = @"c:\dropbox\";

        protected override void UploadFileCore(byte[] fileContent)
        {
            File.WriteAllBytes(RootDropBoxFolder + "file.txt", fileContent);
            Console.WriteLine("_dropBox.GetPublicShareUrl();");
        }
    }
}
