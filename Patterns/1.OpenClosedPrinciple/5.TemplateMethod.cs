using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Patterns.TemplateMethod
{
	abstract class UploaderBase
	{
		public void UploadFile(byte[] fileContent) {
			if (fileContent == null)
				throw new ArgumentException("Kan niet null zijn", "fileContent");

			SetUpHook();
			UploadFileCore(fileContent);
			BreakDownHook();
		}

		protected virtual void SetUpHook() { }

		protected abstract void UploadFileCore(byte[] fileContent);

		protected virtual void BreakDownHook() { }
	}

	class FtpUploader : UploaderBase
	{
		protected override void SetUpHook()	{
			// Connect to FTP server
		}

		protected override void UploadFileCore(byte[] fileContent) {
			// _ftp.PutFreeFile(fileContent);
		}

		protected override void BreakDownHook() {
			// Close FTP connection
		}
	}

	class DropBoxUploader : UploaderBase
	{
		public const string RootDropBoxFolder = @"c:\dropbox\";

		protected override void UploadFileCore(byte[] fileContent) {
			File.WriteAllBytes(RootDropBoxFolder + "file.txt", fileContent);
			Console.WriteLine("_dropBox.GetPublicShareUrl();");
		}
	}
}
