using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

// Strategy
// Define a family of algorithms, encapsulate each one, and make them interchangeable.
// Strategy lets the algorithm vary independently from clients that use it.

namespace Patterns.Strategy
{
    // Defining a family of 'File Uploading' algorithms
    interface IUploadStrategy
    {
        void SetUpHook();
        void UploadFile(byte[] fileContent);
        void BreakDownHook();
    }

    abstract class UploadStrategy : IUploadStrategy
    {
        public virtual void SetUpHook() { }
        public abstract void UploadFile(byte[] fileContent);
        public virtual void BreakDownHook() { }
    }

    // Encapsulate each one
    class DropBoxUploadStrategy : UploadStrategy
    {
        public override void UploadFile(byte[] fileContent)
        {
            File.WriteAllBytes("file.txt", fileContent);
        }
    }

    class FtpUploadStrategy : IUploadStrategy
    {
        public void SetUpHook()
        {
            // Connect to FTP server
        }

        public void UploadFile(byte[] fileContent)
        {
            // _ftp.PutFreeFile(fileContent);
        }

        public void BreakDownHook()
        {
            // Close FTP connection
        }
    }



    // The algorithm may vary independently from clients that use it
    class Uploader
    {
        private readonly IUploadStrategy _strategy;

        public Uploader(IUploadStrategy strategy)
        {
            _strategy = strategy;
        }

        public void UploadFiles(params string[] files)
        {
            if (files == null)
                throw new ArgumentNullException(nameof(files));

            _strategy.SetUpHook();
            foreach (string file in files)
            {
                _strategy.UploadFile(File.ReadAllBytes(file));
            }
            _strategy.BreakDownHook();
        }
    }
}
