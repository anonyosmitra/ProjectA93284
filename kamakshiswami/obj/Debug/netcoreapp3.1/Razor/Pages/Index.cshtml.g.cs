#pragma checksum "C:\Users\Anonyo\ProjectA93284\myWebApp\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "38a3bcab978f5c5d3bc54445ab5a0d2b7c969c86"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(myWebApp.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
namespace myWebApp.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Anonyo\ProjectA93284\myWebApp\Pages\_ViewImports.cshtml"
using myWebApp;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"38a3bcab978f5c5d3bc54445ab5a0d2b7c969c86", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"76edb56edcba8fdf7fa06cef916423d9602b8097", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Users\Anonyo\ProjectA93284\myWebApp\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "38a3bcab978f5c5d3bc54445ab5a0d2b7c969c862969", async() => {
                WriteLiteral(@"
	<div align=""left"" class=""container mainContainer body"">
	<div class=""login-form-section sp"">
		<h4>Devotees Details</h4>
		<div class=""form-in"">
			<h5>First Name</h5>
			<input type=""text"" class=""form-control"" id=""txtfName"" maxlength=""10"">
			<h6><label id=""lblfNAme""></label> </h6>
		</div>
		<div class=""form-in"">
			<h5>Last Name</h5>
			<input type=""text"" class=""form-control"" id=""txtlName"" maxlength=""10"">
			<h6><label id=""lbllName""></label> </h6>
		</div>
		<div class=""form-in"">
			<h5>Mobile Number</h5>
			<input type=""text"" class=""form-control"" id=""txtMobileNo"" maxlength=""10"">
			<h6><label id=""lblMobileNo""></label> </h6>
		</div>
		<div class=""form-in"">
			<h5>City</h5>
			<input type=""text"" class=""form-control"" id=""txtCity"" maxlength=""10"">
			<h6><label id=""lblCity""></label> </h6>
		</div>
		<div class=""form-in"">
			<a onclick=""submit()"" class=""btn btn-submit"">Submit</a>
		</div>
	</div>
</div>
<script language=""javascript"">
    var http = new XMLHttpRequest();
    http.onreadystatechange = function");
                WriteLiteral(@" () {
        if (http.readyState === 4 && http.status === 200) {
            console.log(this.responseText);
    }};
function submit(){
	var data=JSON.stringify({""fName"":document.getElementById(""txtfName"").value,""lName"":document.getElementById(""txtlName"").value,""mobile"":document.getElementById(""txtMobileNo"").value,""city"":document.getElementById(""txtCity"").value});
	console.log(data);
	http.open('POST',""http://127.0.0.1:5000/postDetails"",true);//http post server address
	http.setRequestHeader(""Content-Type"",""application/x-www-form-urlencoded"");
	http.send(data);}
</script>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Pages_Index> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<Pages_Index> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<Pages_Index>)PageContext?.ViewData;
        public Pages_Index Model => ViewData.Model;
    }
}
#pragma warning restore 1591
