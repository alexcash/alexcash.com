# encoding: utf-8
xml.instruct!
  
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  page_count = 0
  sitemap.resources.each do |page|
    catch :next_page do
 
      # If all you want the sitemap to cover is normal html pages, use this:
      # throw :next_page unless page.url.end_with?('.html')
      #
      # If you need more detailed control, this is a starting point:
      throw :next_page if page.url.start_with?('/images/')
      throw :next_page if page.url.start_with?('/javascripts/')
      throw :next_page if page.url.start_with?('/stylesheets/')
      throw :next_page if page.url.start_with?('/layouts/')
      throw :next_page if page.url.start_with?('/font/')
      throw :next_page if page.url.start_with?('/holiday2012/')
      throw :next_page if page.url.start_with?('/email_assets/')
      throw :next_page if page.url.start_with?('/apple-touch-icon')
      throw :next_page if page.url.end_with?('.xml')
      throw :next_page if page.url.start_with?('/.')   # .htaccess, .DS_Store, .git etc.
      throw :next_page if page.url == '/robots.txt'
      throw :next_page if page.url == '/favicon.ico'
      throw :next_page if page.url == '/humans.txt'
      throw :next_page if page.url == '/404.html'
 
      # Exclude drafts
      throw :next_page if defined?(page.data) && page.data['published'] == false
      throw :next_page if defined?(page.data) && page.data['date'] && page.data['date'].to_time > Time.now
 
      # Exclude archive indexes
      #     I prefer not to have the calendar archive index pages in the sitemap.
      #     Remove this if you want them.
      (2000..2030).each do |year|
        # Exclude year index, directories and subdirectories
        throw :next_page if page.url == "/#{year}.html" || page.url == "/#{year}" || page.url.start_with?("/#{year}/")
      end
 
      # Count pages
      page_count += 1
      raise "Over 50 000 pages, to much for a single sitemap" if page_count > 50000
 
      # Build xml of sitemap
      xml.url do
        xml.loc 'http://alexca.sh' + page.url
 
        case page.url
          when '/'
            xml.changefreq 'weekly'    # Set this to a suitable value for your site
          else
            # Setting last modified (lastmod)
            #
            # Checks date in frontmatter and modification date of file, and uses the most recent.
            # (Note: Will not be able to get the correct date for pages with dynamic content)
            frontmatter_date = nil
            frontmatter_date = page.data['date'].to_time.getlocal if defined?(page.data) && page.data['date']
            file_mtime = nil
            file_mtime = File.mtime(page.source_file).to_time.getlocal if defined?(page.source_file)
            most_recent = [frontmatter_date, file_mtime].compact.max if  frontmatter_date || file_mtime
 
            xml.lastmod most_recent.strftime("%Y-%m-%d")  # Using the more recent of the two dates.
                                                          # Using only date, stripping clock
        end
 
        # Priority (priority)
        #
        # To adjust the priority of a page, set sitemap_priority: in the frontmatter.
        frontmatter_sitemap_priority = page.data['sitemap_priority'].to_f if (defined?(page.data) && page.data['sitemap_priority'])
        if frontmatter_sitemap_priority && frontmatter_sitemap_priority < 0 && frontmatter_sitemap_priority > 1
          raise "Incorrect sitemap_priority #{sitemap_priority} for #{page.destination_path}"
        end
        if frontmatter_sitemap_priority && frontmatter_sitemap_priority >= 0 && frontmatter_sitemap_priority <= 1
          xml.priority frontmatter_sitemap_priority unless frontmatter_sitemap_priority == 0.5 # (No use setting the default priority)
        end
 
      end
    end
  end
end
