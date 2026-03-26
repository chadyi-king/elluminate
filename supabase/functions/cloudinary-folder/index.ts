import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const folder = url.searchParams.get("folder");

    if (!folder) {
      return new Response(JSON.stringify({ error: "Missing 'folder' query parameter" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const cloudName = Deno.env.get("CLOUDINARY_CLOUD_NAME");
    const apiKey = Deno.env.get("CLOUDINARY_API_KEY");
    const apiSecret = Deno.env.get("CLOUDINARY_API_SECRET");

    if (!cloudName || !apiKey || !apiSecret) {
      return new Response(JSON.stringify({ error: "Cloudinary credentials not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const credentials = btoa(`${apiKey}:${apiSecret}`);
    const searchUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

    const response = await fetch(searchUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: `folder:${folder}/*`,
        max_results: 500,
        fields: ["secure_url", "public_id", "width", "height", "format"],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudinary API error:", errorText);
      return new Response(JSON.stringify({ error: "Cloudinary API error" }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const assets = (data.resources || []).map((r: any) => ({
      secure_url: r.secure_url,
      public_id: r.public_id,
      width: r.width,
      height: r.height,
      format: r.format,
    }));

    return new Response(JSON.stringify({ assets }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
