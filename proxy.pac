function FindProxyForURL(url, host)
{
   var proxy = "DIRECT";

   if ( dnsDomainIs(host, ".netflix.com") ||
        dnsDomainIs(host, ".hulu.com") ||
        dnsDomainIs(host, ".pandora.com") )
   {
      proxy = "SOCKS5 localhost:8080";
   }

   return proxy;
}

