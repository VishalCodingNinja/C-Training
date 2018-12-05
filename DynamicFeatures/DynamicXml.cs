using System.Collections;
using System.Dynamic;
using System.Xml.Linq;

namespace DynamicFeatures
{
    internal class DynamicXml:DynamicObject,IEnumerable
    {
        private dynamic _xml;

        public DynamicXml(string filenName)
        {
            _xml = XDocument.Load(filenName);

        }
        public DynamicXml(dynamic xml)
        {
            _xml = xml;
        }

        public IEnumerator GetEnumerator()
        {
           foreach(var child in _xml.Elements())
            {
                yield return new DynamicXml(child);
            }
        }
        public static implicit operator string(DynamicXml xml)
        {
            return xml._xml.Value;
        }
        public override bool TryGetMember(GetMemberBinder binder, out object result)//it will be invoked when wee try to invoke .firstName or .method() name
        {
            var xml = _xml.Element(binder.Name);
            if(xml!=null)
            {
                result = new DynamicXml(xml);
                return true;
            }
            result = null;
            return false;

        }
    }
}