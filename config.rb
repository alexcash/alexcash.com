# required to compress pngs
require "middleman-smusher"
require "builder"

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

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
  activate :favicon_maker
end
