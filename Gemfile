source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.3.1"
gem 'jekyll-sass-converter', '~> 2.2' # forcing down from 3.0 because embeded-sass won't build on github
gem 'jekyll-paginate'
gem 'jekyll-seo-tag'
gem 'jekyll-sitemap'

group :jekyll_plugins do
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
