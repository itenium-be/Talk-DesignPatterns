using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;
using System.IO;

namespace Patterns.Observer.WithCancelEvent
{
	class AdvancedNetworkShareUploader
	{
		public event EventHandler<CancelEventArgs> FileUploading;
		public event EventHandler<FileUploadedEventArgs> FileUploaded;

		public void UploadFile(byte[] fileContent)
		{
			string filePath = @"\\someshare\file.dat";

			CancelEventArgs cancelEvent = new CancelEventArgs();
			if (FileUploading != null)
				FileUploading(this, cancelEvent);

			if (!cancelEvent.Cancel) {
				File.WriteAllBytes(filePath, fileContent);

				if (FileUploaded != null)
					FileUploaded(this, new FileUploadedEventArgs(filePath));
			}
		}
	}
}
