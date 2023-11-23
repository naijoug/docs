# SwiftUI

## Reference

- [🍻SwiftOnTap](https://swiftontap.com/)
    > Complete SwiftUI Docs with Examples.
- [SwiftUI Cookbook](https://www.kodeco.com/books/swiftui-cookbook)
- [AltSwiftUI](https://github.com/rakutentech/AltSwiftUI) : 支持 `iOS 11.0` 的 `SwiftUI`
    > Open Source UI framework based on SwiftUI syntax and features, adding backwards 
- [Awesome SwiftUI](https://github.com/onmyway133/awesome-swiftui)
    > 🌮 Awesome resources, articles, libraries about SwiftUI
- [Fucking SwiftUI](https://fuckingswiftui.com/)
- [SwiftUI by Example](https://www.hackingwithswift.com/quick-start/swiftui)
- [FuckingSwiftUI](https://github.com/agelessman/FuckingSwiftUI)
    > 提供SwiftUI中文教程，包含进阶内容
- [SwiftUI Cheat Sheet](https://github.com/SimpleBoilerplates/SwiftUI-Cheat-Sheet)
- [Building SwiftUI debugging utilities](https://www.swiftbysundell.com/articles/building-swiftui-debugging-utilities)
- [LearnSwift](https://github.com/wangzhizhou/LearnSwift)
    > [SwiftUI官方教程中文版](https://swiftui.jokerhub.cn/)

## Combine

- [iOS App Dev Tutorials](https://developer.apple.com/tutorials/app-dev-training)
    > Learn the basics of Xcode, SwiftUI, and UIKit to create compelling iOS apps.
- [RxSwift to Combine Cheatsheet](https://github.com/CombineCommunity/rxswift-to-combine-cheatsheet)
- [OpenCombine](https://github.com/OpenCombine/OpenCombine) : 支持 `iOS 8.0` 的 `Combine`
    > Open source implementation of Apple's Combine framework for processing values over time.
compatibility.
- [Using Combine](https://heckj.github.io/swiftui-notes/)
    > content for Using Combine - notes on learning Combine with UIKit and SwiftUI

## OpenSource Apps

- [iAppStore-SwiftUI](https://github.com/37MobileTeam/iAppStore-SwiftUI)
    > iAppStroe is an Apple Store tool app written in SwiftUI.
- [ACHNBrowserUI](https://github.com/Dimillian/ACHNBrowserUI)
    > Animal Crossing New Horizon companion app in SwiftUI
- [MovieSwiftUI](https://github.com/Dimillian/MovieSwiftUI)
    > SwiftUI & Combine app using MovieDB API. With a custom Flux (Redux) implementation.
- [Cleaner for Xcode](https://github.com/waylybaye/XcodeCleaner-SwiftUI)
    > Make Xcode Clean Again

## UIKit -> SwiftUI

- [SwiftUI-Introspect](https://github.com/siteline/SwiftUI-Introspect)
    > Introspect underlying UIKit/AppKit components from SwiftUI
- [SwiftUIX](https://github.com/SwiftUIX/SwiftUIX)
    > An exhaustive expansion of the standard SwiftUI library.
- [Coordinator](https://github.com/SwiftUIX/Coordinator)
    > A declarative navigation API for SwiftUI.

## Concept

- `SwiftUI` vs `UIKit`

  | SwiftUI |	UIKit
  | --- | ---
  | Text & Label              | UILabel
  | TextField                 | UITextField
  | TextEditor                | UITextView
  | Button & Link             | UIButton
  | Image                     | UIImageView
  | NavigationView            | UINavigationController & UISplitViewController
  | ToolbarItem               | UINavigationItem
  | ScrollView                | UIScrollView
  | List                      | UITableView
  | LazyVGrid & LazyHGrid     | UICollectionView
  | HStack & VStack           | UIStack
  | LazyHStack & LazyVStack   | UIStack
  | TabView                   | UITabBarController & UIPageViewController
  | Toggle                    | UISwitch
  | Slider                    | UISlider
  | Stepper                   | UIStepper
  | ProgressView              | UIProgressView & UIActivityIndicatorView
  | Picker                    | UISegmentedControl
  | DatePicker                | UIDatePicker
  | Alert & ActionSheet       | UIAlertController
  | Map                       | MapKit

## Usage

```swift
// SwiftUI 中使用 UIKit
//  > SwiftUI 中使用 UIView
struct SearchView: UIViewRepresentable {
    func makeUIView(context: Context) -> UISearchBar {
        let searchBar = UISearchBar()
        searchBar.placeholder = "search..."
        return searchBar
    }
    func updateUIView(_ uiView: UISearchBar, context: Context) {
        
    }
}
//  > SwiftUI 中使用 UIViewController
struct ColorPickerView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIColorPickerViewController {
        let controller = UIColorPickerViewController()
        return controller
    }
    func updateUIViewController(_ uiViewController: UIColorPickerViewController, context: Context) {
        
    }
}

// UIKit 中使用 SwiftUI
UIHostingController(rootView: SearchView())
```