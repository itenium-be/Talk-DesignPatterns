using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Patterns.Strategy
{
	class Uploader
	{
		public void UploadFiles(params string[] files)
		{
			if (files == null || files.Length == 0)
				throw new ArgumentException("Kan niet null of leeg zijn", "files");

			_strategy.SetUpHook();
			foreach (string file in files) {
				_strategy.UploadFile(File.ReadAllBytes(file));
			}
			_strategy.BreakDownHook();
		}

		private UploadStrategy _strategy;
		public Uploader(UploadStrategy strategy) {
			// Constructor Dependency Injection
			_strategy = strategy;
		}
	}

	abstract class UploadStrategy
	{
		public virtual void SetUpHook() { }

		public abstract void UploadFile(byte[] fileContent);

		public virtual void BreakDownHook() { }
	}

	class DropBoxUploader : UploadStrategy
	{
		public string RootDropBoxFolder { get; private set; }

		public DropBoxUploader()
			: this(@"c:\dropbox\") {
			// Backwards compatibility
		}

		public DropBoxUploader(string dropBoxPath) {
			RootDropBoxFolder = dropBoxPath;
		}

		public override void UploadFile(byte[] fileContent) {
			string location = RootDropBoxFolder + "file.txt";
			File.WriteAllBytes(location, fileContent);
		}
	}
}
