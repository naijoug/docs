#!/bin/bash
# macOS setup shell

# install homebrew  | https://github.com/Homebrew/brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
# install oh-my-zsh | https://github.com/ohmyzsh/ohmyzsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# install Formulae
## cocoapods        | https://github.com/CocoaPods/CocoaPods
brew install cocoapods
## carthage         | https://github.com/Carthage/Carthage
brew install carthage
## fastlane         | https://github.com/fastlane/fastlane
brew install fastlane    
## GitHub cli       | https://github.com/cli/cli
brew install gh 
## mitmproxy        | https://github.com/mitmproxy/mitmproxy   
brew install mitmproxy        

# install Casks
## Warp             | 
brew install --cask warp
## iTerm2           | https://github.com/gnachman/iTerm2
brew install --cask iterm2
## OpenInTerminal   | https://github.com/Ji4n1ng/OpenInTerminal
brew install --cask openinterminal   
## SwitchHosts      | https://github.com/oldj/SwitchHosts 
brew install --cask switchhosts
## ClashX           | https://github.com/yichengchen/clashX | agent
brew install --cask clashx
## OrbStack         | https://github.com/orbstack/orbstack | docker
brew install --cask orbstack
## Rime for macOS   | https://github.com/rime/squirrel 
$ brew install --cask squirrel 
## Sogou Input
brew install --cask sogouinput
## Sourcetree
brew install --cask sourcetree
## Sublime
brew install --cask sublime-text
## Visual Studio Code
brew install --cask visual-studio-code
        