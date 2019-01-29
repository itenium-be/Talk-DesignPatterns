using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Patterns.Observer
{
    class NetworkShareUploader
    {
        public event EventHandler<FileUploadedEventArgs> FileUploaded;

        public void UploadFile(byte[] fileContent)
        {
            string filePath = @"\\someshare\file.dat";
            File.WriteAllBytes(filePath, fileContent);

            // Notify all subscribers that a file has been uploaded
            if (FileUploaded != null)
                FileUploaded(this, new FileUploadedEventArgs(filePath));
        }
    }



    class FileUploadedEventArgs : EventArgs
    {
        public FileUploadedEventArgs(string location) { Location = location; }
        public string Location { private set; get; }
    }



    class UserNotificator
    {
        public UserNotificator(NetworkShareUploader toWatch)
        {
            toWatch.FileUploaded += new EventHandler<FileUploadedEventArgs>(FileUploaded);
        }

        private void FileUploaded(object sender, FileUploadedEventArgs e)
        {
            Console.WriteLine("New file has been put at {0}", e.Location);
        }
    }
}
