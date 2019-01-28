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

            using (var network = new NetworkStream(socket))
            using (var deflate = new DeflateStream(network, CompressionMode.Compress))
            using (var buffered = new BufferedStream(deflate, 1024))
            {
                buffered.Write(fileContent, 0, fileContent.Length);
            }
        }
    }
}
