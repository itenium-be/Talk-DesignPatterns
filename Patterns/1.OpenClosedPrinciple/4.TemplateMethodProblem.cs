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
				throw new ArgumentException("Kan niet null zijn", "fileContent");

			// Put file on network share
		}
	}

	class FtpUploader : FileSystemUploader
	{
		public override void UploadFile(byte[] fileContent)
		{
			// DRY!
			if (fileContent == null)
				throw new ArgumentException("Kan niet null zijn", "fileContent");

			// Upload the file
		}
	}

	class DropBoxUploader : FileSystemUploader
	{
		public override void UploadFile(byte[] fileContent)
		{
			// Forced to call the base!
			base.UploadFile(fileContent);

			Console.WriteLine("_dropBox.GetPublicShareUrl();");
		}
	}
}
