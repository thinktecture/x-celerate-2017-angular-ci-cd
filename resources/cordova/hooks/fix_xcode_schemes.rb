#!/usr/bin/env ruby
require 'xcodeproj'
xcproj = Xcodeproj::Project.open("platforms/ios/x-celerate.xcodeproj")
xcproj.recreate_user_schemes
xcproj.save
