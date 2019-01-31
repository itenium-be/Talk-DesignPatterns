using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

// Factory Method
// Define an interface for creating an object, but let subclasses decide which class to instantiate.
// Factory Method lets a class defer instantiation to subclasses.

namespace Patterns.FactoryMethod
{
    // The class to instantiate
    class UploadResult { }



    abstract class UploaderBase
    {
        // Define an interface for creating an object
        public UploadResult UploadFile(byte[] fileContent) 
        {
            // Let subclasses decide which class to instantiate
            UploadResult result = UploadFileCore(fileContent);
            return result;
        }

        // The Factory Method
        protected abstract UploadResult UploadFileCore(byte[] fileContent);
    }

    


    class FtpUploader : UploaderBase
    {
        protected override UploadResult UploadFileCore(byte[] fileContent)
        {
            return new UploadResult(); // <-- Instantiation deferred to subclass
        }
    }






    class DropBoxUploadResult : UploadResult
    {
        public string PublicShareUrl { private set; get; }
        public DropBoxUploadResult(string publicShareUrl)
        {
            PublicShareUrl = publicShareUrl;
        }
    }



    class DropBoxUploader : UploaderBase
    {
        protected override UploadResult UploadFileCore(byte[] fileContent)
        {
            File.WriteAllBytes("file.txt", fileContent);
            return new DropBoxUploadResult("_dropBox.GetPublicShare(RootDropBoxFolder)");
        }
    }
}
