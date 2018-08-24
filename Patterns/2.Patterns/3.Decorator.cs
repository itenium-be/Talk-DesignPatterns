using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.IO.Compression;
using System.Net.Sockets;

namespace Patterns.Decorator
{
	class Uploader
	{
		public void UploadFile(byte[] fileContent)
		{
			Socket socket = new Socket(new SocketInformation());

			using (NetworkStream network = new NetworkStream(socket))
			using (DeflateStream deflate = new DeflateStream(network, CompressionMode.Compress))
			using (BufferedStream buffered = new BufferedStream(deflate, 1024))
			{
				buffered.Write(fileContent, 0, fileContent.Length);
			}
		}
	}
}
