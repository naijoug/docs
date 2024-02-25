import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c,a as d,f as i}from"./app-SX6jYwBY.js";const l={},a=i(`<hr><h2 id="功能优化" tabindex="-1"><a class="header-anchor" href="#功能优化" aria-hidden="true">#</a> 功能优化</h2><h3 id="❓图片是什么时候解码的-如何优化" tabindex="-1"><a class="header-anchor" href="#❓图片是什么时候解码的-如何优化" aria-hidden="true">#</a> ❓图片是什么时候解码的，如何优化</h3><details class="hint-container details"><summary>💡</summary><p>图片通常在绘制到屏幕之前进行解码，也就是在绘制到 <code>CALayer</code> 上的时候，这是由图形硬件和底层渲染管道决定的。这个过程可能比较耗时，就有可能引发界面滑动卡顿等问题。</p><p>优化图片解码的效率：</p><ul><li><p>尽量在后台处理所有的解码。这可以通过图像绘制进 <code>CGContext</code>，然后提取解码后的图像实现。</p></li><li><p>避免实时解码。如果图片源于网络，那么可以先下载，再解码，最后显示。这样的流程可以优化界面的流畅性。</p></li><li><p>将图片转换为 <code>RGB</code> 的 <code>Bitmap</code> 格式，本地存储这种纹理图片，直接使用解码后的纹理，减少运行时的解码消耗。</p></li><li><p>图片尺寸应尽可能与显示尺寸相匹配，避免过大的图片造成内存的浪费和 <code>CPU</code> 的过多计算。</p></li></ul></details><h3 id="❓如果客户端上有个按钮-点击会触发一次网络请求-在短时间内快速点击-怎么处理" tabindex="-1"><a class="header-anchor" href="#❓如果客户端上有个按钮-点击会触发一次网络请求-在短时间内快速点击-怎么处理" aria-hidden="true">#</a> ❓如果客户端上有个按钮，点击会触发一次网络请求，在短时间内快速点击，怎么处理</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>防抖操作（<code>Debouncing</code>）：可以设置一个小的延迟（如300ms），当用户点击按钮后，不会立即触发网络请求，而是等待一段时间，如果在这段时间内用户没有再次点击，则发起网络请求。如果用户在这段时间内又点击了一次，则重新计时。</p></li><li><p>快速连续点击时只取第一次点击：可以设置一个标志位，当发出第一次请求后，改变该标志位的状态，后面的点击就不再处理，直到第一次请求返回之后再恢复标志位。</p></li><li><p>限制一个时间段的连续点击次数（比如1s内只能点击1次）：使用时间戳或者设置定时器去判断两次点击的时间间隔，只有间隔大于设置的最小点击间隔才会触发网络请求。</p></li><li><p>禁用/启用按钮：在发起网络请求的时候，可以临时将按钮设置为禁用状态，然后在请求返回后再启用。</p></li></ul></details><h3 id="❓uitableview-优化方案" tabindex="-1"><a class="header-anchor" href="#❓uitableview-优化方案" aria-hidden="true">#</a> ❓<code>UITableView</code> 优化方案</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>重用 <code>Cell</code>：确保正在使用 <code>dequeueReusableCellWithIdentifier</code> 方法来重用 <code>Cell</code>，而不是每次都创建新的 <code>Cell</code>。</p></li><li><p>开启 <code>UITableView</code> 的 <code>rowHeight</code> 和 <code>estimatedRowHeight</code>，这样能够让 <code>TableView</code> 知道大致的行高，优化渲染时间。</p></li><li><p>避免复杂的视图层次结构：每个 <code>Cell</code> 中的视图层次应该尽可能简单，不要有太多嵌套的视图。较少使用透明视图，透明的视图会使得界面重绘增加，会占用更多 <code>CPU</code> 和 <code>GPU</code> 资源。所有有透明度的图片都将导致 <code>off-screen</code> 渲染，降低滑动性能。</p></li><li><p>预先计算并缓存行高：如果表格视图的行高不是固定的，那么可以在 <code>tableView:heightForRowAtIndexPath:</code> 方法中返回一个预先计算并缓存的行高。</p></li><li><p>按需加载：如果有些 <code>Cell</code> 的内容需要从网络加载，那么应该等到滚动停止时再加载这些内容，避免滚动过程中频繁地进行网络请求和 <code>UI</code> 更新。</p></li><li><p>使用正确的数据结构来存储数据：维护 <code>TableView</code> 的数据数组时，选择合适的数据结构，可提高数据查询性能。</p></li><li><p>利用多线程：对于耗时的操作，比如图片下载或者大量数据的处理，应该放到后台线程去做。</p></li><li><p>避免在滚动过程中进行复杂操作：这很可能造成卡顿。如果涉及 <code>Cell</code> 中数据刷新，比如图片下载，或者定时器刷新数据等。需要根据是否出现在屏幕中，进行网络请求的暂停，定时器的暂停等。</p></li></ul></details><h3 id="❓下拉加载更多功能-如何优化" tabindex="-1"><a class="header-anchor" href="#❓下拉加载更多功能-如何优化" aria-hidden="true">#</a> ❓下拉加载更多功能，如何优化</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>数据获取方式：一次性获取大量数据的方式，不但会增加网络请求的负担，也会增加内存的压力。定义较小的数据页数，如每次获取10条或20条，然后通过分页的方式来获取更多数据。</p></li><li><p>数据存储：对于已经加载过的数据，我们可以选择缓存它们以便快速展示。这样一来，下次用户再次看到同样的内容时，应用无需再次发起网络请求。这样可以减少网络请求的次数，提高用户体验。</p></li><li><p><code>UI</code> 视图复用：为了减少内存的使用，需要在 <code>tableView</code> 或者 <code>collectionView</code> 中复用 <code>cell</code>。<code>Cell</code> 是用来显示列表中每一行或每一列的内容的，复用它们可以避免不断地创建和销毁视图，节省内存。</p></li><li><p>图片处理：如果你的列表包含大量的图片，那么正确处理这些图片也是非常重要的一环。你可以选择在后台线程中进行图片下载和解码，这样可以防止阻塞主线程。同时，你也可以使用些像是SDWebImage或AFNetworking这样功能强大又流行的开源库来处理图片的加载和缓存。</p></li><li><p>预加载：应用在用户滚动到相应位置之前，可以预先加载这些数据。事实上，<code>UITableView</code> 和 <code>UICollectionView</code> 都提供了这样的功能，我们只需要在适当的时机，如滚动到列表的最后几行，就开始加载下一页的数据。</p></li><li><p>耗时操作异步处理：比如网络请求、图片加载等耗时的操作可以放在子线程中处理，不阻塞 <code>UI</code> 线程，保证列表滑动的流畅性。完成后再返回主线程更新 <code>UI</code>。</p></li><li><p>数据懒加载：对于一些重量级的数据，如图片、视频等，可以采用懒加载的方式，即在用户需要查看的时候再去加载。</p></li><li><p>占位图或者骨架屏：在数据加载过程中，可以给用户展示一些占位图或者骨架屏，以提供更好的用户体验。</p></li></ul></details><h3 id="❓uilabel-加载-emoji-耗内存-如何去监听和优化" tabindex="-1"><a class="header-anchor" href="#❓uilabel-加载-emoji-耗内存-如何去监听和优化" aria-hidden="true">#</a> ❓<code>UILabel</code> 加载 emoji 耗内存，如何去监听和优化</h3><details class="hint-container details"><summary>💡</summary><p><code>UILabel</code> 加载并显示 <code>emoji</code> 表情符号确实会造成内存消耗，这主要是由于 <code>emoji</code> 符号由 <code>Unicode</code> 字符组成，需要更多的内存空间存储，并且渲染 <code>emoji</code> 符号到图形界面也需要内存。</p><p>监听：可以通过性能分析工具 <code>Instruments</code> 来进行。<code>Instruments</code> 的 <code>Allocations</code> 工具可以用来跟踪内存分配，从而帮助找到内存消耗过大的地方。</p><p>优化：</p><ul><li><p>显示 <code>emoji</code> 符号的 <code>UILabel</code> 数量应尽量减少。每个 <code>UILabel</code> 创建的时候都会为其内容开辟一块内存空间。在同一时间显示过多的 <code>UILabel</code>，尤其是包含 <code>emoji</code> 符号的 <code>UILabel</code>，会造成内存压力。可以通过复用 <code>UILabel</code> 或者其它延迟加载技术来减少同时加载的 <code>UILabel</code> 数量。</p></li><li><p>使用图文混排。如果一个 <code>UILabel</code> 中的 <code>emoji</code> 符号数量很多，可以考虑将这些 <code>emoji</code> 符号转换为对应的位图图像，并和文字一起显示。这样可以减少渲染 <code>emoji</code> 符号的内存消耗。</p></li></ul></details><hr><h2 id="优化方案" tabindex="-1"><a class="header-anchor" href="#优化方案" aria-hidden="true">#</a> 优化方案</h2><h3 id="❓ios-优化一般从哪几方面入手" tabindex="-1"><a class="header-anchor" href="#❓ios-优化一般从哪几方面入手" aria-hidden="true">#</a> ❓<code>iOS</code> 优化一般从哪几方面入手</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>用户界面优化：提升 <code>UI</code> 流畅度，避免卡顿和延时。可以通过合理使用视图、优化 <code>UI</code> 控件（尤其列表视图）、优化动画、遵循视图生命周期等方法提升 <code>UI</code> 表现。</p></li><li><p>性能优化：包括 <code>CPU</code>、内存和电池寿命优化。例如优化内存管理、避免 <code>CPU</code> 过度消耗、优化资源加载、减少网络请求的数量和大小。</p></li><li><p>网络优化：对网络请求进行优化，减少应用程序对数据服务的依赖。例如使用缓存、慎用大文件和视频下载、避免频繁网络请求等。</p></li><li><p>内存优化：尽量减少程序运行时的内存使用，比如避免内存泄露、避免无谓的中间对象创建、使用合适的数据结构、及时销毁不再使用的对象等。</p></li><li><p>代码优化：保持代码整洁和可读，便于定位问题和维护。例如遵循编程规范、采用高性能的算法和数据结构、避免重复代码等。</p></li><li><p>易用性优化：提高用户体验，例如改善界面设计、优化交互逻辑、添加友好的提示和反馈等。</p></li></ul></details><h3 id="❓ios-启动优化方案-如何检测-如何监控" tabindex="-1"><a class="header-anchor" href="#❓ios-启动优化方案-如何检测-如何监控" aria-hidden="true">#</a> ❓<code>iOS</code> 启动优化方案，如何检测，如何监控</h3><details class="hint-container details"><summary>💡</summary><p>优化方案：</p><ul><li>优化 <code>App</code> 启动项目：避免在 <code>didFinishLaunchingWithOptions</code> 方法中执行耗时操作。 <blockquote><p>例如网络请求、大量数据处理。如果必须执行这些操作，考虑将其放到后台线程运行。</p></blockquote></li><li>优化 <code>Main.storyboard</code>：在主界面显示之前，系统需要加载和处理 <code>Main.storyboard</code> 文件，如果主 <code>storyboard</code> 里的 <code>viewcontroller</code> 比较复杂，可能会增加启动时间。当然，如果没有必要，完全可以不使用 <code>storyboard</code> 或者 <code>nib</code>，转而全部使用代码来布局。</li><li>采用懒加载：将某些初始化工作推迟到更晚执行，需要时再进行。</li><li>减少 <code>App</code> 的动态库的数量：<code>iOS</code> 的 <code>App</code> 在启动时会加载所有动态库，动态库越多，启动所需的时间就越多。</li></ul><p>检测：</p><ul><li>应用程序启动分为两部分，一个是 <code>pre-main</code> 阶段，一个是 <code>main-runloop</code> 阶段。</li><li>通过在 <code>Scheme</code> 设置的 <code>Arguments</code> 添加 <code>DYLD_PRINT_STATISTICS</code> 或者 <code>DYLD_PRINT_STATISTICS_DETAILS</code> 环境变量，就可以在控制台输出 <code>pre-main</code> 阶段的耗时。</li><li><code>main-runloop</code> 阶段，由于它比较接近具体业务，往往需要业务自行进行打点统计。</li></ul><p>监控：</p><ul><li><code>Xcode</code> 自带的 <code>Instruments</code> 工具，该工具提供的 <code>Time Profiler</code> 可以对启动时间进行详细的分析。</li><li>一些三方平台提供服务，如<code>Umeng</code>、腾讯 <code>Bugly</code> 等也可以监控应用启动性能。</li></ul></details><h3 id="❓ios-冷启动优化方案" tabindex="-1"><a class="header-anchor" href="#❓ios-冷启动优化方案" aria-hidden="true">#</a> ❓<code>iOS</code> 冷启动优化方案</h3><details class="hint-container details"><summary>💡</summary><blockquote><p>冷启动：应用进程从完全没有启动，到用户能看到应用主界面并且可以进行交互所经历的过程。</p></blockquote><p>优化方案：</p><ul><li><p>减少启动时的动态库加载：<code>App</code> 启动时会加载所有动态库，动态库越多，启动所需的时间就越多。一些大型应用可能包含着数百个动态库，这将大大增加启动时间。</p></li><li><p>延迟初始化操作：部分初始化操作并不需要在启动时立刻完成，可以延迟其执行。判断哪些操作的执行可以延后需要在具体业务中去分析判断。</p></li><li><p>减少启动时的 <code>I/O</code> 操作：尽量减少在应用启动阶段的磁盘 <code>I/O</code> 操作，这些操作是昂贵而且可能阻塞主线程。比如数据库初始化，一些文件的读写等。</p></li><li><p>加速主线程 <code>UI</code> 渲染：避免复杂的视图层次结构和昂贵的布局计算。避免在启动时采用大型的图片，尽可能减少透明的视图，因为透明的视图需要进行额外的图层混合。</p></li><li><p>优化启动代码：在 <code>app</code> 启动过程中，<code>Objective-C</code> 会尽可能快的完成启动，但是有一部分时间被用来处理 <code>+load</code> 方法，因此若不重要或者紧要，应避免使用该方法。</p></li></ul></details><h3 id="❓ios-界面卡顿优化方案-如何检测-如何监控" tabindex="-1"><a class="header-anchor" href="#❓ios-界面卡顿优化方案-如何检测-如何监控" aria-hidden="true">#</a> ❓<code>iOS</code> 界面卡顿优化方案，如何检测，如何监控</h3><details class="hint-container details"><summary>💡</summary><p>卡顿优化：</p><ul><li>避免在主线程进行耗时操作：如网络请求、数据库读写、大量计算等任务，以免占用 <code>UI</code> 线程，形成卡顿。</li><li>使用正确的数据结构：正确的数据结构可以减少 <code>CPU</code> 和内存的消耗，提高界面的流畅度。</li><li>优化图像处理：对于大量图片，建议使用异步解码和缓存。</li><li>避免复杂的视图层级：视图间的过渡和动画会消耗大量的 <code>CPU</code> 和 <code>GPU</code>，所以做好视图的管理，避免过多的子视图和层级可以提高性能。</li></ul><p>检测卡顿：</p><ul><li>使用 <code>Instruments</code> 工具：<code>Time Profiler</code> 和 <code>CPU usage tools</code> 可以帮助你确定 <code>CPU</code> 的使用情况，看哪些任务消耗 <code>CPU</code> 的原因。</li><li><code>CADisplaylink</code>：检测屏幕刷新率，可以通过监听每一帧的渲染耗时，来实时监测 <code>App</code> 的性能状况。</li><li>利用 <code>RunLoop</code> 观察者机制：在 <code>RunLoop</code> 中添加一个观察者，然后在回调方法中检测每一次 <code>RunLoop</code> 循环的耗时长。</li></ul><p>监控卡顿：</p><ul><li>自定义卡顿监控系统：主要通过监听 <code>RunLoop</code> 状态和 <code>CADisplayLink</code> 来判断。</li><li>第三方平台监控：如腾讯 <code>Bugly</code>、友盟等都提供了卡顿监控的功能。</li></ul></details><h3 id="❓ios-耗电量优化方案-如何检测-如何监控" tabindex="-1"><a class="header-anchor" href="#❓ios-耗电量优化方案-如何检测-如何监控" aria-hidden="true">#</a> ❓<code>iOS</code> 耗电量优化方案，如何检测，如何监控</h3><details class="hint-container details"><summary>💡</summary><p>耗电优化：</p><ul><li>优化网络使用：频繁的网络请求会导致更高的电量消耗，所以需要尽可能减少网络请求，比如使用更高效的数据格式(如：<code>protobuf</code>)，减少重复请求，使用缓存等。</li><li>后台任务优化：对于不需要实时运行的后台任务，应尽可能的延迟执行，或者在用户设备处于充电状态时执行。</li><li>定位服务使用优化：尽可能减少使用定位服务，除非必要，否则不要在后台使用定位服务。</li><li>前台刷新频率的调整：对于一些刷新频率较高的场景，比如游戏，可以考虑降低帧率来节省电量。</li></ul><p>检测和监控耗电：</p><ul><li>使用 <code>Xcode</code> 自带的 <code>Instruments</code> 中的 <code>Energy Log</code> 可以帮助开发者分析 <code>App</code> 的电量消耗情况。</li><li>设置电池使用情况：在 <code>iOS</code> 系统的“设置”里，选择“电池”，查看各个应用的电池使用情况。</li><li>使用第三方性能监控工具：如<code>Battery Doctor</code>，可以详细查看您的 <code>iPhone</code> 在一天中的电量消耗情况，以及每个应用的电池耗电情况。</li><li>开发自定义的电池检测工具。其中包括使用私有API检测电池状态，或者分析系统电池状态文件等。</li></ul></details><h3 id="❓ios-网络优化方案-如何检测-如何监控" tabindex="-1"><a class="header-anchor" href="#❓ios-网络优化方案-如何检测-如何监控" aria-hidden="true">#</a> ❓<code>iOS</code> 网络优化方案，如何检测，如何监控</h3><details class="hint-container details"><summary>💡</summary><p>网络优化：</p><ul><li>减少请求的频率：把多次请求合并成一次大的请求可以减少网络请求的开销。</li><li>请求数据做好缓存：在接口未变的情况下，如果以前请求过的数据可以缓存起来，这样就不需要重复请求。</li><li>使用更高效的数据格式：例如 <code>protobuf</code>，比 <code>JSON</code> 和 <code>XML</code> 这样的文本格式具有更高的性能和更小的数据大小。</li><li>使用更快的网络技术：例如 <code>HTTP/2</code>，与传统的 <code>HTTP/1.1</code>相比，<code>HTTP/2</code> 会使用更少的连接，降低了 <code>TCP</code> 连接的开销。</li></ul><p>网络检测和监控：</p><ul><li>使用 <code>Charles</code> 或 <code>Wireshark</code> 这样的网络分析工具，可以非常详细地分析网络请求的情况。</li><li>应用内部可以设计一套性能监控系统，将每次请求的时间、失败概率等信息上报，便于追踪网络请求性能。</li><li>使用苹果官方提供的 <code>Instruments</code> 工具的 <code>Network Connection</code> 和 <code>Network Transfer</code> 来查看网络请求的详细情况。</li><li>使用第三方性能监控服务，如 <code>DataEye</code>、友盟等，可以定制化地追踪和报告 <code>App</code> 的网络性能。</li></ul></details><h3 id="❓ios-弱网情况优化方案" tabindex="-1"><a class="header-anchor" href="#❓ios-弱网情况优化方案" aria-hidden="true">#</a> ❓<code>iOS</code> 弱网情况优化方案</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>启用请求超时: 可以对网络请求进行超时设置，如果在设定的时间内网络请求未能完成，则取消请求。</p></li><li><p>数据压缩: 若能控制服务器端，可以启用GZIP压缩来减小数据传输量，从而提高网络性能。</p></li><li><p>适应性下载: 可以对服务器请求的文件进行分辨率或质量的选择，选择较小的文件进行传输，以减少所需的带宽。</p></li><li><p>静默重试机制：在网络请求失败后，<code>app</code> 会尝试在后台静默重试，以提高请求成功的机会。</p></li><li><p>显示加载进度: 当网络状况不佳时，向用户显示下载或上传进度，可以让用户知道程序正在做什么。</p></li><li><p>优先级设置: 可以针对特定网络请求设置优先级，保证必要的网络请求首先完成。</p></li><li><p>离线存储：对于部分数据，应用可以考虑提供离线存储的功能，待网络环境较好时，进行同步更新。</p></li><li><p>使用 <code>CDN</code> 加速：<code>CDN</code> 是内容分发网络，通过将网络内容分发到各地的节点服务器，用户可以就近获取所需内容，降低网络延迟。</p></li></ul></details><h3 id="❓ios-安装包体积优化方案" tabindex="-1"><a class="header-anchor" href="#❓ios-安装包体积优化方案" aria-hidden="true">#</a> ❓<code>iOS</code> 安装包体积优化方案</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>使用 <code>App thinning</code> 技术：包括 <code>App Slicing</code>、<code>Bitcode</code> 和 <code>On-demand Resources</code>。使用户下载的包只包含其需要的资源，减小 <code>App</code> 的下载和安装体积。</p></li><li><p>图片资源优化：对图片进行压缩，使用 <code>WebP</code> 格式、删除不必要的 <code>@3x</code> 图，使用矢量图(<code>SVG</code> 或 <code>PDF</code>)等手段减小图片文件的大小。</p></li><li><p><code>Code stripping</code>：通过移除未使用的代码和资源来减少 <code>App</code> 的大小。<code>Swift</code> 有个编译选项叫做 <code>Whole Module Optimization</code> 会移除未使用的 <code>Swift</code> 代码。</p></li><li><p>动态库和静态库选择：尽量使用系统的库，扩展库尽可能选择静态库静态链接。</p></li><li><p>删除不必要的第三方库：不要引入无用的第三方库，而且对于第三方库的使用，没必要整包引入，只引入所需类或方法。</p></li><li><p>对于一些不常更新的内容可以考虑在 <code>App</code> 初次启动后再通过网络下载。</p></li></ul></details><hr><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2><h3 id="❓常见的崩溃有哪些-应对方案是什么" tabindex="-1"><a class="header-anchor" href="#❓常见的崩溃有哪些-应对方案是什么" aria-hidden="true">#</a> ❓常见的崩溃有哪些，应对方案是什么</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>空指针引用：当你试图访问一个已经被释放了的对象，就会发生空指针引用崩溃。解决方法是弄清楚引用的对象在什么时候被释放的，并避免在释放后再次被使用。</p></li><li><p>溢出：例如数组访问超出范围，或者数据类型溢出等。对数组的访问需要做好越界检查，对于可能会溢出的运算操作也需要做好检查。</p></li><li><p>线程问题：多线程操作共享资源时，如果没有做好同步，很容易出现崩溃。解决方法是使用线程锁等同步技术，保证同一时刻只有一个线程能操作共享资源。</p></li><li><p>内存耗尽：当App消耗的内存过大时，系统会出现内存警告，如果App不能及时做出响应，系统就会杀掉App来回收内存。优化内存使用，处理低内存警告，及时释放不再使用的资源。</p></li><li><p>API使用不当：如调用了未实现的方法、或者在主线程中执行耗时操作等。解决方法是严格按照API文档的要求进行开发。</p></li><li><p>数据类型或结构不匹配：例如，字典键值对插入 <code>nil</code> 值或类类型错误。我们需要进行安全的数据操作，而不是盲目的操作。</p></li></ul><blockquote><p>处理崩溃的常规步骤：首先从崩溃日志入手，找到崩溃的线程和崩溃的位置，然后查找代码，寻找可能引起崩溃的原因，再针对性地修改代码。对于难以复现的崩溃，可以使用 <code>Crashlytics</code> 等第三方 <code>crash</code> 报告工具，收集更多的信息来帮助分析崩溃原因。</p></blockquote></details><h3 id="❓容错处理一般是怎么做的" tabindex="-1"><a class="header-anchor" href="#❓容错处理一般是怎么做的" aria-hidden="true">#</a> ❓容错处理一般是怎么做的</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>异常处理：对可能引发异常的代码进行 <code>try-catch</code> 处理，捕捉并处理异常。</p></li><li><p>容器越界</p><ul><li>访问数组或列表时进行索引判断，避免索引超出范围；</li><li>访问字典时对键值对进行非空判断，避免插入 <code>nil</code> 键值对。</li></ul></li><li><p>网络请求</p><ul><li>针对服务端返回的数据进行合法性校验，如是否为空或格式是否正确，防止因服务端返回的数据出错而导致客户端程序崩溃；</li><li>请求失败时，提供错误信息并进行相应的错误处理。</li></ul></li><li><p>无网络情况下，需要有容错处理，比如数据请求重试，或者加载本地缓存等。</p></li><li><p>检查外部资源：一些会引用到外部资源的操作，如文件操作或数据库操作，需要先检查资源是否存在和是否可用等。</p></li><li><p>多线程：在多线程操作共享资源的时候，使用锁或其他同步手段，防止引起数据混乱的问题。</p></li><li><p>内存管理：需要注意对象的引用计数，避免引起内存泄露或野指针。对于内存紧张情况，需要及时释放不再需要的内存。</p></li><li><p><code>UI</code> 更新：在主线程中更新用户界面，避免出现界面卡顿或崩溃的情况。</p></li></ul></details><h3 id="❓项目刚开始没做容错处理-如何防止拦截潜在的崩溃" tabindex="-1"><a class="header-anchor" href="#❓项目刚开始没做容错处理-如何防止拦截潜在的崩溃" aria-hidden="true">#</a> ❓项目刚开始没做容错处理，如何防止拦截潜在的崩溃</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>代码检查：对代码进行全面的审查，特别是处理资源、用户输入以及与系统和其他软件交互的部分。在开发和调试阶段就应该尽可能发现和修复问题。</p></li><li><p>异常处理：对可能出现异常的代码段进行 <code>try-catch</code> 处理，对抛出的异常进行适当的捕获和处理。</p></li><li><p>错误日志：记录详细的错误日志，当出错时可以依据日志来定位和解决问题。开发时, 构建详细的日志系统, 可以在应用出现问题时获取详细的信息, 方便定位问题。</p></li><li><p>单元测试：编写单元测试，确保每个函数、类和模块在各种情况下都能正确工作。</p></li><li><p>使用静态分析工具</p><blockquote><p>如利用 <code>Xcode</code> 内置的静态分析功能，帮助找出可能的内存泄漏、未初始化的变量等问题。</p></blockquote></li><li><p>防御性编程：在编程时期望最坏的情况，对每个输入参数进行判断，能有效规避一部分崩溃。</p><blockquote><p>如：对对象进行 <code>nil</code> 判断，对数据进行越界判断，对网络请求进行超时处理等。</p></blockquote></li><li><p>使用 <code>Crash</code> 报告工具</p><blockquote><p>如 <code>FireBase Crashlytics</code> 等工具，以收集更多在设备上发生的运行时崩溃信息。</p></blockquote></li></ul></details><h3 id="❓如何检测-bug-和崩溃-线上版本怎么处理" tabindex="-1"><a class="header-anchor" href="#❓如何检测-bug-和崩溃-线上版本怎么处理" aria-hidden="true">#</a> ❓如何检测 <code>Bug</code> 和崩溃，线上版本怎么处理</h3><details class="hint-container details"><summary>💡</summary><p>检测 <code>Bug</code> 和崩溃：</p><ul><li><p>编写单元测试和集成测试，确保代码的稳定性和可靠性。</p></li><li><p>使用静态分析工具，如 <code>Xcode</code> 的 <code>Analyze</code> 功能，找出可能的内存泄漏、未初始化的变量等代码质量问题。</p></li><li><p>使用 <code>Xcode</code> 内置的 <code>Instruments</code> 工具进行性能分析，发现可能的性能问题，如内存泄漏、<code>CPU</code> 占用过高等。</p></li><li><p>在开发和调试阶段，通过控制台日志、断点、打印等方式进行 <code>bug</code> 调试。</p></li></ul><p>线上版本处理：</p><ul><li><p>使用第三方错误跟踪系统</p><blockquote><p>如 <code>FireBase Crashlytics</code> 、<code>Bugly</code> 等，这些工具可以收集和报告应用在生产环境中的崩溃信息。</p></blockquote></li><li><p>通过 <code>App Store Connect</code> 的崩溃报告查看线上崩溃信息。</p></li><li><p>热修复。对于严重影响用户体验的问题，需要尽快进行线上修复。</p><blockquote><p>如 <code>iOS</code> 的 <code>JSPatch</code> 和 <code>React Native</code> 等都支持热更新技术。</p></blockquote></li><li><p>如果 <code>Bug</code> 严重影响用户使用，应立即提交新的版本修复，同时在应用程序的“更新说明”中告知用户已经修复了这个 <code>Bug</code>。</p></li></ul></details><h3 id="❓让你设计一种机制检测-uiviewcontroller-的内存泄漏-你会怎么做" tabindex="-1"><a class="header-anchor" href="#❓让你设计一种机制检测-uiviewcontroller-的内存泄漏-你会怎么做" aria-hidden="true">#</a> ❓让你设计一种机制检测 <code>UIViewController</code> 的内存泄漏，你会怎么做</h3><details class="hint-container details"><summary>💡</summary><p><code>UIViewController</code> 的内存泄漏通常发生在其被引用次数不正确（<code>retain cycle</code>）导致其不能被正常释放。</p><ul><li><p>简易方案：重写 <code>UIViewController</code> 的 <code>dealloc</code> 方法。</p><blockquote><p>在控制器应当被销毁的时候，如果出现了内存泄漏，那么 <code>dealloc</code> 方法将不会被调用。</p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>dealloc <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@ is being deallocated&quot;</span><span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>内存泄漏检测工具</p><blockquote><p>例如 <code>Instruments</code> 中的 <code>Leaks</code> 和 <code>Allocations</code> 工具。能够定位内存泄漏的位置，以及内存泄漏的源头。</p></blockquote></li><li><p>侵入性方案：创建一个中间类，让所有的控制器都继承这个中间类，然后在中间类的 <code>dealloc</code> 方法中添加日志输出，这样所有的控制器都有了这个内存泄漏的检测。</p></li><li><p>无侵入性方案：利用运行时机制做一个全局 <code>UIViewController</code> 的内存监控。</p><ul><li>创建一个全局的单例负责监控，设置一个 <code>NSMutableArray</code> 作为容器保存当前正在显示的 <code>UIViewController</code> 实例。</li><li>利用 <code>UIViewController</code> 的生命周期方法和 <code>Runtime</code> 的 <code>swizzling</code> 机制，切换 <code>viewDidAppear:</code> 和 <code>viewDidDisappear:</code> 方法，在切换的方法中，分别向容器添加和移除 <code>UIViewController</code> 实例。</li><li>利用定时器，在每隔一定的时间周期检查容器中的 <code>UIViewController</code> 实例，如果有实例在其 <code>viewDidDisappear:</code> 调用一段时间后还在容器中，说明该实例可能存在内存泄漏。</li></ul><p>注意：这种方法虽然能实现自动化检测，但也存在误判的情况，需要在实际项目中进行充分的测试和调整。</p></li></ul></details><h3 id="❓发布出去的版本-怎么收集-crash-日志" tabindex="-1"><a class="header-anchor" href="#❓发布出去的版本-怎么收集-crash-日志" aria-hidden="true">#</a> ❓发布出去的版本，怎么收集 <code>crash</code> 日志</h3><details class="hint-container details"><summary>💡</summary><ul><li><p><code>Crashlytics</code>：<code>Firebase</code> 中的一个组件，是一个实时崩溃报告工具，可以追踪、优先级排序和修复稳定性问题，以提高应用质量。</p></li><li><p><code>TestFlight</code>：<code>Apple</code> 官方提供的解决方案。当使用 <code>TestFlight</code> 为 <code>beta</code> 测试人员分发应用程序时，可以收集崩溃日志。此外，分发到 <code>App Store</code> 的应用程序，还可以使用 <code>App Store Connect</code> 服务中的 “崩溃报告” 功能查看崩溃信息。</p></li><li><p><code>Bugly</code>：腾讯开发的一个移动应用的 <code>Bug</code> 跟踪工具，它提供了实时、详细的崩溃报告以及版本管理等功能。</p></li><li><p><code>Sentry</code>：这是一个开源的错误追踪系统，提供了多平台的支持，它可以捕获崩溃，并提供丰富的上下文信息以便更好的定位问题。</p></li></ul></details><h3 id="❓不使用-bugly-等第三方平台或者这些第三方平台是如何收集-crash-日志" tabindex="-1"><a class="header-anchor" href="#❓不使用-bugly-等第三方平台或者这些第三方平台是如何收集-crash-日志" aria-hidden="true">#</a> ❓不使用 <code>bugly</code> 等第三方平台或者这些第三方平台是如何收集 <code>crash</code> 日志</h3><details class="hint-container details"><summary>💡</summary><ul><li><p>系统的崩溃报告：可以从设备的 <code>设置-&gt;隐私-&gt;分析与改进-&gt;分析数据</code> 中获取崩溃日志。对于发布到 <code>App Store</code> 的应用，也可以通过 <code>App Store Connect</code> 的崩溃报告收集崩溃日志。</p></li><li><p>自行收集崩溃日志：可以在代码中设置一个全局的异常处理函数，用以捕获未捕获的异常。可以通过 <code>NSSetUncaughtExceptionHandler</code> 函数设置此全局的异常处理函数。在此函数中，可以保存包含堆栈跟踪的异常信息，以便在下次启动应用时发送给服务器。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token function">NSSetUncaughtExceptionHandler</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>uncaughtExceptionHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">uncaughtExceptionHandler</span><span class="token punctuation">(</span>NSException <span class="token operator">*</span>exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;Crash: %@&quot;</span><span class="token punctuation">,</span> exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;Stack Trace: %@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>exception callStackSymbols<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 保存 Crash 报告到本地</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三方平台通常就是使用这种方式获取崩溃日志，然后将这些崩溃日志通过自有的服务器进行收集和分析，通常它们还会加入一些额外的信息，如设备型号、系统版本、用户地理位置等用于分析崩溃原因。</p></li></ul></details>`,46);function s(n,p){return o(),c("div",null,[d(" more "),a])}const u=e(l,[["render",s],["__file","0x13.optimization.html.vue"]]);export{u as default};
