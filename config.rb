# required to compress pngs
require "middleman-smusher"
require "builder"


helpers do
  def kill_orphans(text)
    temp = text.gsub(/\s+/m, ' ').strip.split(" ")
    lastword = temp.pop
    text = temp.join(" ") + "&nbsp;" + lastword
    return text
  end
end


set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :blog do |blog|
  blog.sources  = "blog/:title"
  blog.permalink = ":title"
  blog.layout = "blog_layout"
end


activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9', 'android 2.3']
  config.cascade  = false
end

activate :directory_indexes
page "/404.html", :directory_index => false
page "*.xml", :layout => false

# Development-specific configuration
configure :development do
    activate :livereload
end

# Build-specific configuration
configure :build do
  activate :gzip
  activate :minify_css
  activate :minify_javascript

  activate :asset_hash
  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
