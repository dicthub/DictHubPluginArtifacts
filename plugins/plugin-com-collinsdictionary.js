if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'plugin-com-collinsdictionary'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'plugin-com-collinsdictionary'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'plugin-com-collinsdictionary'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'plugin-com-collinsdictionary'.");
}
this['plugin-com-collinsdictionary'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Throwable = Error;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Any = Object;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var small = $module$kotlinx_html_js.kotlinx.html.small_69ofui$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var toString = Kotlin.toString;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_94plub$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_7ents2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var throwCCE = Kotlin.throwCCE;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var numberToInt = Kotlin.numberToInt;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var em = $module$kotlinx_html_js.kotlinx.html.em_2lgk3j$;
  var strong = $module$kotlinx_html_js.kotlinx.html.strong_okpg28$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var audio = $module$kotlinx_html_js.kotlinx.html.audio_hb8i2y$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var Random = Kotlin.kotlin.random.Random;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  TranslationException.prototype = Object.create(Throwable.prototype);
  TranslationException.prototype.constructor = TranslationException;
  TranslationHttpFailureException.prototype = Object.create(TranslationException.prototype);
  TranslationHttpFailureException.prototype.constructor = TranslationHttpFailureException;
  TranslationNotFoundException.prototype = Object.create(TranslationException.prototype);
  TranslationNotFoundException.prototype.constructor = TranslationNotFoundException;
  TranslationParsingFailureException.prototype = Object.create(TranslationException.prototype);
  TranslationParsingFailureException.prototype.constructor = TranslationParsingFailureException;
  function jSelect(selector) {
    return jQuery(selector);
  }
  function TranslationException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    Throwable.call(this);
    this.message_p94nxe$_0 = typeof message === 'undefined' && cause != null ? Kotlin.toString(cause) : message;
    this.cause_sx0cjo$_0 = cause;
    Kotlin.captureStack(Throwable, this);
    this.name = 'TranslationException';
    this.query = json([]);
    this.providerId = '';
    this.requestUrl = '';
    this.manualCheckUrl = null;
  }
  Object.defineProperty(TranslationException.prototype, 'message', {
    get: function () {
      return this.message_p94nxe$_0;
    }
  });
  Object.defineProperty(TranslationException.prototype, 'cause', {
    get: function () {
      return this.cause_sx0cjo$_0;
    }
  });
  TranslationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationException',
    interfaces: [Throwable]
  };
  function TranslationException_init(cause, $this) {
    $this = $this || Object.create(TranslationException.prototype);
    TranslationException.call($this, null, cause);
    return $this;
  }
  function TranslationHttpFailureException() {
    TranslationException.call(this);
    this.name = 'TranslationHttpFailureException';
    this.message_7991vs$_0 = 'Failed to fetch ' + this.requestUrl + ' due to http failure.';
  }
  Object.defineProperty(TranslationHttpFailureException.prototype, 'message', {
    get: function () {
      return this.message_7991vs$_0;
    }
  });
  TranslationHttpFailureException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationHttpFailureException',
    interfaces: [TranslationException]
  };
  function TranslationNotFoundException() {
    TranslationException.call(this);
    this.name = 'TranslationNotFoundException';
    this.message_sn6b0z$_0 = this.query.toString() + ' not found from ' + this.providerId + ', ' + this.requestUrl;
  }
  Object.defineProperty(TranslationNotFoundException.prototype, 'message', {
    get: function () {
      return this.message_sn6b0z$_0;
    }
  });
  TranslationNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationNotFoundException',
    interfaces: [TranslationException]
  };
  function TranslationParsingFailureException() {
    TranslationException.call(this);
    this.name = 'TranslationParsingFailureException';
    this.rawContent = null;
    this.message_1onltk$_0 = 'Failed to parse content for ' + this.query + ' by ' + this.providerId + ', ' + this.requestUrl;
  }
  Object.defineProperty(TranslationParsingFailureException.prototype, 'message', {
    get: function () {
      return this.message_1onltk$_0;
    }
  });
  TranslationParsingFailureException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationParsingFailureException',
    interfaces: [TranslationException]
  };
  function HttpAsyncClient() {
  }
  HttpAsyncClient.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpAsyncClient',
    interfaces: []
  };
  function AjaxHttpClient() {
    AjaxHttpClient_instance = this;
  }
  function AjaxHttpClient$get$lambda$lambda(closure$xhr, closure$resolve, closure$reject, closure$url) {
    return function (it) {
      if (closure$xhr.status === 200) {
        closure$resolve(closure$xhr.responseText);
      }
       else {
        closure$reject(RuntimeException_init(closure$xhr.status.toString() + ' ' + closure$xhr.statusText + ' when getting ' + closure$url));
      }
      return Unit;
    };
  }
  function AjaxHttpClient$get$lambda$lambda_0(closure$reject, closure$url) {
    return function (it) {
      closure$reject(RuntimeException_init('Failed to load ' + closure$url + '.'));
      return Unit;
    };
  }
  function AjaxHttpClient$get$lambda(closure$url) {
    return function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', AjaxHttpClient$get$lambda$lambda(xhr, resolve, reject, closure$url));
      xhr.addEventListener('error', AjaxHttpClient$get$lambda$lambda_0(reject, closure$url));
      xhr.open('GET', closure$url);
      xhr.send();
      return Unit;
    };
  }
  AjaxHttpClient.prototype.get_61zpoe$ = function (url) {
    return new Promise(AjaxHttpClient$get$lambda(url));
  };
  function AjaxHttpClient$post$lambda$lambda(closure$xhr, closure$resolve, closure$reject, closure$url) {
    return function (it) {
      if (closure$xhr.status === 200) {
        closure$resolve(closure$xhr.responseText);
      }
       else {
        closure$reject(RuntimeException_init(closure$xhr.status.toString() + ' ' + closure$xhr.statusText + ' when posting ' + closure$url));
      }
      return Unit;
    };
  }
  function AjaxHttpClient$post$lambda$lambda_0(closure$reject, closure$url) {
    return function (it) {
      closure$reject(RuntimeException_init('Failed to load ' + closure$url + '.'));
      return Unit;
    };
  }
  function AjaxHttpClient$post$lambda(closure$url, closure$header, closure$body) {
    return function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', AjaxHttpClient$post$lambda$lambda(xhr, resolve, reject, closure$url));
      xhr.addEventListener('error', AjaxHttpClient$post$lambda$lambda_0(reject, closure$url));
      xhr.open('POST', closure$url);
      var tmp$;
      tmp$ = closure$header.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        xhr.setRequestHeader(element.key, element.value);
      }
      xhr.send(closure$body);
      return Unit;
    };
  }
  AjaxHttpClient.prototype.post_bokjk9$ = function (url, header, body) {
    return new Promise(AjaxHttpClient$post$lambda(url, header, body));
  };
  AjaxHttpClient.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AjaxHttpClient',
    interfaces: [HttpAsyncClient]
  };
  var AjaxHttpClient_instance = null;
  function AjaxHttpClient_getInstance() {
    if (AjaxHttpClient_instance === null) {
      new AjaxHttpClient();
    }
    return AjaxHttpClient_instance;
  }
  var andThen = defineInlineFunction('plugin-com-collinsdictionary.org.dicthub.plugin.shared.util.andThen_g414bn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Promise_init = Promise;
    function andThen$lambda$lambda(closure$exec, closure$resolve, closure$reject) {
      return function (it) {
        return closure$exec(it).then(closure$resolve).catch(closure$reject);
      };
    }
    function andThen$lambda(this$andThen, closure$exec) {
      return function (resolve, reject) {
        this$andThen.then(andThen$lambda$lambda(closure$exec, resolve, reject)).catch(reject);
        return Unit;
      };
    }
    return function ($receiver, exec) {
      return new Promise_init(andThen$lambda($receiver, exec));
    };
  }));
  var convert = defineInlineFunction('plugin-com-collinsdictionary.org.dicthub.plugin.shared.util.convert_wus875$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Promise_init = Promise;
    function convert$lambda$lambda(closure$resolve, closure$func) {
      return function (it) {
        closure$resolve(closure$func(it));
        return Unit;
      };
    }
    function convert$lambda(this$convert, closure$func) {
      return function (resolve, reject) {
        this$convert.then(convert$lambda$lambda(resolve, closure$func)).catch(reject);
        return Unit;
      };
    }
    return function ($receiver, func) {
      return new Promise_init(convert$lambda($receiver, func));
    };
  }));
  var allPromises = defineInlineFunction('plugin-com-collinsdictionary.org.dicthub.plugin.shared.util.allPromises_m47hm4$', wrapFunction(function () {
    var Promise$Companion = Promise;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var Pair_init = Kotlin.kotlin.Pair;
    var Unit = Kotlin.kotlin.Unit;
    function allPromises$lambda$lambda(closure$resolve) {
      return function (it) {
        var tmp$, tmp$_0;
        closure$resolve(new Pair_init((tmp$ = it[0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = it[1]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE()));
        return Unit;
      };
    }
    function allPromises$lambda(closure$pA, closure$pB) {
      return function (resolve, reject) {
        Promise$Companion.all([closure$pA, closure$pB]).then(allPromises$lambda$lambda(resolve)).catch(reject);
        return Unit;
      };
    }
    return function (pA, pB) {
      return new Promise$Companion(allPromises$lambda(pA, pB));
    };
  }));
  var allPromises_0 = defineInlineFunction('plugin-com-collinsdictionary.org.dicthub.plugin.shared.util.allPromises_t4ctt0$', wrapFunction(function () {
    var Promise$Companion = Promise;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var Triple_init = Kotlin.kotlin.Triple;
    var Unit = Kotlin.kotlin.Unit;
    function allPromises$lambda$lambda(closure$resolve) {
      return function (it) {
        var tmp$, tmp$_0, tmp$_1;
        closure$resolve(new Triple_init((tmp$ = it[0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = it[1]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), (tmp$_1 = it[2]) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE()));
        return Unit;
      };
    }
    function allPromises$lambda(closure$pA, closure$pB, closure$pC) {
      return function (resolve, reject) {
        Promise$Companion.all([closure$pA, closure$pB, closure$pC]).then(allPromises$lambda$lambda(resolve)).catch(reject);
        return Unit;
      };
    }
    return function (pA, pB, pC) {
      return new Promise$Companion(allPromises$lambda(pA, pB, pC));
    };
  }));
  function builtinSourceIcon(id) {
    return 'img/plugin/' + id + '.png';
  }
  function renderSource$lambda$lambda$lambda(closure$icon) {
    return function ($receiver) {
      $receiver.target = '_blank';
      img($receiver, void 0, closure$icon);
      return Unit;
    };
  }
  function renderSource$lambda$lambda(closure$sourceUrl, closure$icon) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Powered by ');
      a($receiver, closure$sourceUrl, void 0, void 0, renderSource$lambda$lambda$lambda(closure$icon));
      return Unit;
    };
  }
  function renderSource$lambda(closure$sourceUrl, closure$icon) {
    return function ($receiver) {
      small($receiver, void 0, renderSource$lambda$lambda(closure$sourceUrl, closure$icon));
      return Unit;
    };
  }
  function renderSource(container, sourceUrl, icon) {
    div(container, 'translation-source', renderSource$lambda(sourceUrl, icon));
  }
  function renderBugReport$lambda$lambda$lambda$lambda($receiver) {
    $receiver.src = 'img/icon-bug.16.png';
    return Unit;
  }
  function renderBugReport$lambda$lambda$lambda($receiver) {
    $receiver.target = '_blank';
    img($receiver, void 0, void 0, void 0, renderBugReport$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function renderBugReport$lambda$lambda(closure$bugUrl) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Report issue: ');
      a($receiver, closure$bugUrl, void 0, void 0, renderBugReport$lambda$lambda$lambda);
      return Unit;
    };
  }
  function renderBugReport$lambda(closure$bugUrl) {
    return function ($receiver) {
      small($receiver, void 0, renderBugReport$lambda$lambda(closure$bugUrl));
      return Unit;
    };
  }
  function renderBugReport(container, id, query, exception) {
    var bugTitle = id + ' - [' + getText(query) + ']/' + getFrom(query) + '/' + getTo(query);
    var bugContent = 'message: ' + toString(exception.message) + ', cause: ```' + toString(exception.cause) + '```';
    var bugUrl = 'https://github.com/dicthub/DictHubExtension/issues/new?title=' + bugTitle + '&body=' + bugContent;
    div(container, 'translation-report-bug', renderBugReport$lambda(bugUrl));
  }
  function renderFailure$lambda(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('No result found for ' + '"' + getText(closure$query) + '"');
      return Unit;
    };
  }
  function renderFailure$lambda_0(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Parse query html failed ' + '"' + getText(closure$query) + '"');
      return Unit;
    };
  }
  function renderFailure$lambda_1(closure$failure) {
    return function ($receiver) {
      var tmp$;
      $receiver.unaryPlus_pdl1vz$((tmp$ = closure$failure.message) != null ? tmp$ : 'Error when calling service');
      return Unit;
    };
  }
  function renderFailure(id, sourceUrl, query, failure) {
    console.error('Failure from ' + id + ' on ' + query, failure);
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    if (Kotlin.isType(failure, TranslationNotFoundException))
      p(container, 'translation-failure alert alert-warning', renderFailure$lambda(query));
    else if (Kotlin.isType(failure, TranslationParsingFailureException))
      p(container, 'translation-failure alert alert-danger', renderFailure$lambda_0(query));
    else {
      p(container, 'translation-failure alert alert-warning', renderFailure$lambda_1(failure));
    }
    renderBugReport(container, id, query, failure);
    renderSource(container, sourceUrl, builtinSourceIcon(id));
    return stringBuilder.toString();
  }
  function getText($receiver) {
    return attribute($receiver, 'text');
  }
  function getFrom($receiver) {
    return attribute($receiver, 'from');
  }
  function getTo($receiver) {
    return attribute($receiver, 'to');
  }
  function createQuery(text, from, to_0) {
    return json([to('text', text), to('from', from), to('to', to_0)]);
  }
  function getName($receiver) {
    return attribute($receiver, 'name');
  }
  function getDescription($receiver) {
    return attribute($receiver, 'description');
  }
  function getSource($receiver) {
    return attribute($receiver, 'source');
  }
  function getSourceUrl($receiver) {
    return attribute($receiver, 'sourceUrl');
  }
  function getAuthor($receiver) {
    return attribute($receiver, 'author');
  }
  function getAuthorUrl($receiver) {
    return attribute($receiver, 'authorUrl');
  }
  function getOptions($receiver) {
    return attribute($receiver, 'options');
  }
  function getOption($receiver, name) {
    return attribute($receiver, name);
  }
  function getType($receiver) {
    return attribute($receiver, 'type');
  }
  function getOptionDescription($receiver) {
    return attribute($receiver, 'description');
  }
  function getDefault($receiver) {
    return attribute($receiver, 'default');
  }
  function createMeta(name, description, source, sourceUrl, author, authorUrl, options) {
    if (options === void 0)
      options = json([]);
    return json([to('name', name), to('description', description), to('source', source), to('sourceUrl', sourceUrl), to('author', author), to('authorUrl', authorUrl), to('options', options)]);
  }
  function createMetaOptionConfig(type, description, default_0) {
    var $receiver = json([to('type', type)]);
    if (description != null) {
      $receiver['description'] = description;
    }
    if (default_0 != null) {
      $receiver['default'] = default_0;
    }
    return $receiver;
  }
  function TranslationProvider() {
  }
  TranslationProvider.prototype.updateOptions = function (options) {
    console.log('Update options for ' + this.id(), options);
  };
  TranslationProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TranslationProvider',
    interfaces: []
  };
  function attribute($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver[name]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function create_plugin_com_collinsdictionary() {
    return new CollinsDictionaryProvider(AjaxHttpClient_getInstance());
  }
  var ID;
  function DictHtmlParser() {
  }
  DictHtmlParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DictHtmlParser',
    interfaces: []
  };
  function CollinsDictionaryProvider(httpClient) {
    this.httpClient_0 = httpClient;
  }
  CollinsDictionaryProvider.prototype.id = function () {
    return ID;
  };
  CollinsDictionaryProvider.prototype.meta = function () {
    return createMeta('Collins Dictionary', 'Collins Dictionary for English, Chinese, French, German, Italian, Portuguese and Spanish.', 'Collins Dictionary', 'https://www.collinsdictionary.com', 'DictHub', 'https://github.com/willings/DictHub');
  };
  CollinsDictionaryProvider.prototype.canTranslate = function (query) {
    return this.getParser_0(query) != null;
  };
  function CollinsDictionaryProvider$translate$lambda$lambda(closure$parser, closure$resolve, closure$query, this$CollinsDictionaryProvider) {
    return function (html) {
      var tmp$, tmp$_0;
      var htmlWithoutImgTag = removeTagForJquery(html, ['img']);
      var tmp$_1;
      if ((tmp$ = closure$parser.parse_61zpoe$(htmlWithoutImgTag)) != null) {
        closure$resolve(renderItem(closure$query, tmp$));
        tmp$_1 = Unit;
      }
       else
        tmp$_1 = null;
      var tmp$_2;
      tmp$_2 = (tmp$_0 = tmp$_1) != null ? tmp$_0 : renderFailure_0(closure$query, new TranslationNotFoundException());
      return tmp$_2;
    };
  }
  function CollinsDictionaryProvider$translate$lambda$lambda_0(closure$resolve, closure$query) {
    return function (it) {
      closure$resolve(renderFailure_0(closure$query, it));
      return Unit;
    };
  }
  function CollinsDictionaryProvider$translate$lambda(this$CollinsDictionaryProvider, closure$sourceUrl, closure$parser, closure$query) {
    return function (resolve, f) {
      this$CollinsDictionaryProvider.httpClient_0.get_61zpoe$(closure$sourceUrl).then(CollinsDictionaryProvider$translate$lambda$lambda(closure$parser, resolve, closure$query, this$CollinsDictionaryProvider)).catch(CollinsDictionaryProvider$translate$lambda$lambda_0(resolve, closure$query));
      return Unit;
    };
  }
  CollinsDictionaryProvider.prototype.translate = function (query) {
    var tmp$;
    var sourceUrl_0 = sourceUrl(query);
    tmp$ = this.getParser_0(query);
    if (tmp$ == null) {
      return Promise.reject(IllegalArgumentException_init('No parser found for ' + getFrom(query) + ' to ' + getTo(query)));
    }
    var parser = tmp$;
    return new Promise(CollinsDictionaryProvider$translate$lambda(this, sourceUrl_0, parser, query));
  };
  CollinsDictionaryProvider.prototype.getParser_0 = function (query) {
    var tmp$, tmp$_0;
    tmp$ = to(getFrom(query), getTo(query));
    if (equals(tmp$, to('en', 'zh-CN')) || equals(tmp$, to('en', 'zh-TW')) || equals(tmp$, to('zh-CN', 'en')) || equals(tmp$, to('zh-TW', 'en')))
      tmp$_0 = new ZhParser();
    else if (equals(tmp$, to('en', 'fr')) || equals(tmp$, to('fr', 'en')))
      tmp$_0 = new FrParser();
    else if (equals(tmp$, to('en', 'de')) || equals(tmp$, to('de', 'en')))
      tmp$_0 = new DeParser();
    else if (equals(tmp$, to('en', 'es')) || equals(tmp$, to('es', 'en')))
      tmp$_0 = new EsParser();
    else if (equals(tmp$, to('en', 'pt')) || equals(tmp$, to('pt', 'en')))
      tmp$_0 = new PtParser();
    else if (equals(tmp$, to('en', 'it')) || equals(tmp$, to('it', 'en')))
      tmp$_0 = new ItParser();
    else
      tmp$_0 = null;
    return tmp$_0;
  };
  CollinsDictionaryProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollinsDictionaryProvider',
    interfaces: [TranslationProvider]
  };
  function DeParser() {
  }
  function DeParser$parse$lambda(this$DeParser) {
    return function (it) {
      return this$DeParser.parseSenseItemPart_0(it);
    };
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  DeParser.prototype.parse_61zpoe$ = function (html) {
    var tmp$;
    var jq = jQuery(html);
    var mainPart = jq.find('.cb-def').has('.definitions').first();
    var cbh = mainPart.children('.cB-h');
    var $receiver = cbh.children('.h2_entry').first().text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return null;
    }
    var query = tmp$;
    var $receiver_0 = cbh.children('.mini_h2').find('.pron').text();
    var pronunciation = !isBlank($receiver_0) ? $receiver_0 : null;
    var $receiver_1 = cbh.children('.mini_h2').find('a.sound').attr('data-src-mp3');
    var audioUrl = !isBlank($receiver_1) ? $receiver_1 : null;
    var parts = mapToList(mainPart.children('.definitions').children('.hom').has('.sense').has('.type-translation'), DeParser$parse$lambda(this));
    return new DictItem(query, pronunciation, audioUrl, copyToArray(parts));
  };
  function DeParser$parseSenseItemPart$lambda(this$DeParser) {
    return function (it) {
      return this$DeParser.parseSenseListItem_0(it);
    };
  }
  DeParser.prototype.parseSenseItemPart_0 = function (element) {
    var pos = element.children('.gramGrp').find('.pos').first().text();
    var senses = mapToList(element.children('.sense'), DeParser$parseSenseItemPart$lambda(this));
    return new DictItemCategory(pos, copyToArray(senses));
  };
  function DeParser$parseSenseListItem$lambda(this$DeParser) {
    return function (it) {
      return this$DeParser.parseSenseLine_0(it);
    };
  }
  function DeParser$parseSenseListItem$lambda_0(this$DeParser) {
    return function (it) {
      return this$DeParser.parseSenseItemExample_0(it);
    };
  }
  function DeParser$parseSenseListItem$lambda_1(this$DeParser) {
    return function (it) {
      return this$DeParser.parseSenseItemLexString_0(it);
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  DeParser.prototype.parseSenseListItem_0 = function (element) {
    var subLineElements = element.children('.sense');
    var lines = mapToList(subLineElements.add(element), DeParser$parseSenseListItem$lambda(this));
    var examples = mapToList(element.find('.type-example'), DeParser$parseSenseListItem$lambda_0(this));
    var phrases = mapToList(element.find('.type-lexstring'), DeParser$parseSenseListItem$lambda_1(this));
    var $receiver = ArrayList_init();
    $receiver.addAll_brywnq$(examples);
    $receiver.addAll_brywnq$(phrases);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    var usages = destination;
    return new DictItemSenseItem(copyToArray(lines), void 0, copyToArray(usages));
  };
  DeParser.prototype.parseSenseLine_0 = function (element) {
    var translation = element.children('.type-translation').text();
    var label = element.children('.lbl').text();
    var colloc = element.children('.gramGrp').text();
    var $receiver = [translation, label, colloc];
    var all$result;
    all$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element_0 = $receiver[tmp$];
        if (!isBlank(element_0)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    var isBlank_0 = all$result;
    if (isBlank_0) {
      if (numberToInt(element.children('.re').has('.type-min_phr').length) > 0) {
        return this.parseSenseMinimalUnit_0(element.children('.re').has('.type-min_phr'));
      }
    }
    var $receiver_0 = listOf([label, colloc]);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_1 = tmp$_0.next();
      if (!isBlank(element_1))
        destination.add_11rb$(element_1);
    }
    return new DictItemSenseItemLine(translation, copyToArray(destination));
  };
  DeParser.prototype.parseSenseMinimalUnit_0 = function (element) {
    var translation = element.children('.type-translation').text();
    var orth = element.children('.type-min_phr').text();
    return new DictItemSenseItemLine(translation, [orth]);
  };
  DeParser.prototype.parseSenseItemExample_0 = function (element) {
    var quote = element.children('.quote').text();
    var translation = element.children('.type-translation').text();
    if (isBlank(quote) && isBlank(translation)) {
      return null;
    }
    var $receiver = [quote, translation];
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element_0 = $receiver[tmp$];
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    return joinToString(destination, '\r\n');
  };
  DeParser.prototype.parseSenseItemLexString_0 = function (element) {
    var phr = element.children('.type-min_phr').text();
    var translation = element.children('.type-translation').text();
    if (isBlank(phr) && isBlank(translation)) {
      return null;
    }
    var $receiver = [phr, translation];
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element_0 = $receiver[tmp$];
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    return joinToString(destination, '\r\n');
  };
  DeParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeParser',
    interfaces: [DictHtmlParser]
  };
  function EsParser() {
  }
  function EsParser$parse$lambda(this$EsParser) {
    return function (it) {
      return this$EsParser.parseSenseItemPart_0(it);
    };
  }
  EsParser.prototype.parse_61zpoe$ = function (html) {
    var tmp$;
    var jq = jQuery(html);
    var mainPart = jq.find('.cb-def').has('.definitions').first();
    var cbh = mainPart.children('.cB-h');
    var $receiver = cbh.children('.h2_entry').first().text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return null;
    }
    var query = tmp$;
    var $receiver_0 = cbh.children('.mini_h2').find('.pron').text();
    var pronunciation = !isBlank($receiver_0) ? $receiver_0 : null;
    var $receiver_1 = cbh.children('.mini_h2').find('a.sound').attr('data-src-mp3');
    var audioUrl = !isBlank($receiver_1) ? $receiver_1 : null;
    var parts = mapToList(mainPart.children('.definitions').children('.hom').has('.sense').has('.type-translation'), EsParser$parse$lambda(this));
    return new DictItem(query, pronunciation, audioUrl, copyToArray(parts));
  };
  function EsParser$parseSenseItemPart$lambda(this$EsParser) {
    return function (it) {
      return this$EsParser.parseSenseListItem_0(it);
    };
  }
  EsParser.prototype.parseSenseItemPart_0 = function (element) {
    var pos = element.children('.gramGrp').find('.pos').first().text();
    var senses = mapToList(element.children('.sense'), EsParser$parseSenseItemPart$lambda(this));
    return new DictItemCategory(pos, copyToArray(senses));
  };
  function EsParser$parseSenseListItem$lambda(this$EsParser) {
    return function (it) {
      return this$EsParser.parseSenseLine_0(it);
    };
  }
  function EsParser$parseSenseListItem$lambda_0(this$EsParser) {
    return function (it) {
      return this$EsParser.parseSenseItemExample_0(it);
    };
  }
  function EsParser$parseSenseListItem$lambda_1(this$EsParser) {
    return function (it) {
      return this$EsParser.parseSenseItemPhrase_0(it);
    };
  }
  EsParser.prototype.parseSenseListItem_0 = function (element) {
    var subLineElements = element.find('.sense');
    var lines = mapToList(subLineElements.add(element), EsParser$parseSenseListItem$lambda(this));
    var examples = mapToList(element.find('.type-example'), EsParser$parseSenseListItem$lambda_0(this));
    var phrases = mapToList(element.find('.type-phr'), EsParser$parseSenseListItem$lambda_1(this));
    var $receiver = ArrayList_init();
    $receiver.addAll_brywnq$(examples);
    $receiver.addAll_brywnq$(phrases);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    var usages = destination;
    return new DictItemSenseItem(copyToArray(lines), void 0, copyToArray(usages));
  };
  EsParser.prototype.parseSenseLine_0 = function (element) {
    var translation = element.children('.type-translation').text();
    var label = element.children('.lbl').text();
    var colloc = element.children('.gramGrp').text();
    var $receiver = [translation, label, colloc];
    var all$result;
    all$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element_0 = $receiver[tmp$];
        if (!isBlank(element_0)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    var isBlank_0 = all$result;
    if (isBlank_0) {
      if (numberToInt(element.children('.re').has('.type-phr').length) > 0) {
        return this.parseSenseMinimalUnit_0(element.children('.re').has('.type-phr'));
      }
    }
    var $receiver_0 = listOf([label, colloc]);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_1 = tmp$_0.next();
      if (!isBlank(element_1))
        destination.add_11rb$(element_1);
    }
    return new DictItemSenseItemLine(translation, copyToArray(destination));
  };
  EsParser.prototype.parseSenseMinimalUnit_0 = function (element) {
    var translation = element.children('.type-translation').text();
    var orth = element.children('.type-phr').text();
    return new DictItemSenseItemLine(translation, [orth]);
  };
  EsParser.prototype.parseSenseItemExample_0 = function (element) {
    var quote = element.children('.quote').text();
    var translation = element.children('.type-translation').text();
    if (isBlank(quote) && isBlank(translation)) {
      return null;
    }
    var $receiver = [quote, translation];
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element_0 = $receiver[tmp$];
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    return joinToString(destination, '\r\n');
  };
  EsParser.prototype.parseSenseItemPhrase_0 = function (element) {
    var phr = element.children('.type-min_phr').text();
    var translation = element.children('.type-translation').text();
    if (isBlank(phr) && isBlank(translation)) {
      return null;
    }
    var $receiver = [phr, translation];
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element_0 = $receiver[tmp$];
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    return joinToString(destination, '\r\n');
  };
  EsParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EsParser',
    interfaces: [DictHtmlParser]
  };
  function FrParser() {
  }
  function FrParser$parse$lambda(this$FrParser) {
    return function (it) {
      return this$FrParser.parseSenseItemPart_0(it);
    };
  }
  FrParser.prototype.parse_61zpoe$ = function (html) {
    var tmp$;
    var jq = jQuery(html);
    var mainPart = jq.find('.cb-def').has('.definitions').first();
    var cbh = mainPart.children('.cB-h');
    var $receiver = cbh.children('.h2_entry').first().text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return null;
    }
    var query = tmp$;
    var $receiver_0 = cbh.children('.mini_h2').find('.pron').text();
    var pronunciation = !isBlank($receiver_0) ? $receiver_0 : null;
    var audioUrl = cbh.children('.mini_h2').find('a.sound').attr('data-src-mp3');
    var parts = mapToList(mainPart.children('.definitions').children('.hom').has('.sense'), FrParser$parse$lambda(this));
    return new DictItem(query, pronunciation, audioUrl, copyToArray(parts));
  };
  function FrParser$parseSenseItemPart$lambda(this$FrParser) {
    return function (it) {
      return this$FrParser.parseSenseListItem_0(it);
    };
  }
  FrParser.prototype.parseSenseItemPart_0 = function (element) {
    var pos = element.children('.gramGrp').find('.pos').first().text();
    var senses = mapToList(element.children('.sense'), FrParser$parseSenseItemPart$lambda(this));
    return new DictItemCategory(pos, copyToArray(senses));
  };
  function FrParser$parseSenseListItem$lambda(this$FrParser) {
    return function (it) {
      return this$FrParser.parseSenseItemExample_0(it);
    };
  }
  function FrParser$parseSenseListItem$lambda_0(this$FrParser) {
    return function (it) {
      return this$FrParser.parseSenseItemPhases_0(it);
    };
  }
  FrParser.prototype.parseSenseListItem_0 = function (element) {
    var translation = element.children('.type-translation').text();
    var label = element.children('.lbl').text();
    var colloc = element.find('.gramGrp .colloc').text();
    var $receiver = listOf([label, colloc]);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    var line = new DictItemSenseItemLine(translation, copyToArray(destination));
    var examples = mapToList(element.children('.type-example'), FrParser$parseSenseListItem$lambda(this));
    var phrases = mapToList(element.children('.type-phr'), FrParser$parseSenseListItem$lambda_0(this));
    var $receiver_0 = ArrayList_init();
    $receiver_0.addAll_brywnq$(examples);
    $receiver_0.addAll_brywnq$(phrases);
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_1 = tmp$_0.next();
      if (!isBlank(element_1))
        destination_0.add_11rb$(element_1);
    }
    var usages = destination_0;
    return new DictItemSenseItem([line], void 0, copyToArray(usages));
  };
  FrParser.prototype.parseSenseItemExample_0 = function (element) {
    var quote = element.children('.quote').text();
    var translation = element.children('.type-translation').text();
    return quote + '\r\n' + translation;
  };
  FrParser.prototype.parseSenseItemPhases_0 = function (element) {
    var phr = element.children('.type-phr').text();
    var translation = element.children('.type-translation').text();
    return phr + '\r\n' + translation;
  };
  FrParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrParser',
    interfaces: [DictHtmlParser]
  };
  function ItParser() {
    this.removeParenthesisReg_0 = Regex_init('\\((.+)\\)');
  }
  function ItParser$parse$lambda(this$ItParser) {
    return function (it) {
      return this$ItParser.parseDictItemCategory_0(it);
    };
  }
  ItParser.prototype.parse_61zpoe$ = function (html) {
    var tmp$;
    var jq = jQuery(html);
    var mainPart = jq.find('.he').has('.hom').first();
    var cbh = mainPart.find('.cB-h').first();
    var $receiver = cbh.children('.h2_entry').first().text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return null;
    }
    var query = tmp$;
    var $receiver_0 = this.parsePronunciation_0(cbh.children('.pron').first());
    var pronunciation = !isBlank($receiver_0) ? $receiver_0 : null;
    var parts = mapToList(mainPart.find('.hom'), ItParser$parse$lambda(this));
    return new DictItem(query, pronunciation, void 0, copyToArray(parts));
  };
  ItParser.prototype.parsePronunciation_0 = function (element) {
    return this.formatParenthesis_0(element.text());
  };
  function ItParser$parseDictItemCategory$lambda(this$ItParser) {
    return function (it) {
      return this$ItParser.parseSenseList_0(it);
    };
  }
  ItParser.prototype.parseDictItemCategory_0 = function (element) {
    var pos = element.find('.gramGrp .pos').text();
    var senses = copyToArray(mapToList(element.children('.sense_list').children('.sense_list_item'), ItParser$parseDictItemCategory$lambda(this)));
    return new DictItemCategory(pos, senses);
  };
  function ItParser$parseSenseList$lambda(this$ItParser) {
    return function (it) {
      return this$ItParser.parseSenseLine_0(it);
    };
  }
  function ItParser$parseSenseList$lambda_0(this$ItParser) {
    return function (it) {
      return this$ItParser.parseSenseLine_0(it);
    };
  }
  function ItParser$parseSenseList$lambda_1(this$ItParser) {
    return function (it) {
      return this$ItParser.parseSenseItemExample_0(it);
    };
  }
  function ItParser$parseSenseList$lambda_2(this$ItParser) {
    return function (it) {
      return this$ItParser.parseSenseItemPhrase_0(it);
    };
  }
  ItParser.prototype.parseSenseList_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var subLineElements = element.find('li.sense_list_item');
    if (numberToInt(subLineElements.length) > 0) {
      tmp$_2 = mapToList(subLineElements, ItParser$parseSenseList$lambda(this));
    }
     else {
      tmp$_1 = (tmp$ = this.parseSenseLine_0(element)) != null ? listOf_0(tmp$) : null;
      if (tmp$_1 == null) {
        if (numberToInt(element.has('.phrase').length) > 0) {
          tmp$_0 = mapToList(element.children('.phrase').has('.cit-type-translation').first(), ItParser$parseSenseList$lambda_0(this));
        }
         else {
          tmp$_0 = emptyList();
        }
        tmp$_1 = tmp$_0;
      }
      tmp$_2 = tmp$_1;
    }
    var lines = tmp$_2;
    var exampleList = mapToList(element.find('.cit-type-example'), ItParser$parseSenseList$lambda_1(this));
    var phraseList = mapToList(element.children('.phrase'), ItParser$parseSenseList$lambda_2(this));
    var tmp$_3 = copyToArray(lines);
    var tmp$_4 = void 0;
    var $receiver = toMutableList(phraseList);
    $receiver.addAll_brywnq$(exampleList);
    return new DictItemSenseItem(tmp$_3, tmp$_4, copyToArray($receiver));
  };
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  ItParser.prototype.parseSenseLine_0 = function (element) {
    var $receiver = ['lbl', 'phr', 'gramGrp'];
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element_0 = $receiver[tmp$];
      var tmp$_0;
      var $receiver_0 = element.children('.' + element_0).text();
      if ((tmp$_0 = $receiver_0.length > 0 ? $receiver_0 : null) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    var labels = destination;
    var translation = element.children('.cit-type-translation').text();
    if (labels.isEmpty() && isBlank(translation)) {
      return null;
    }
    return new DictItemSenseItemLine(translation, copyToArray(labels));
  };
  ItParser.prototype.parseSenseItemExample_0 = function (element) {
    var tmp$, tmp$_0;
    var $receiver = element.children('.orth').text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return element.text();
    }
    var orth = tmp$;
    var $receiver_0 = element.children('.cit-type-translation').text();
    tmp$_0 = !isBlank($receiver_0) ? $receiver_0 : null;
    if (tmp$_0 == null) {
      return element.text();
    }
    var translation = tmp$_0;
    return joinToString_0([orth, translation], '\r\n');
  };
  ItParser.prototype.parseSenseItemPhrase_0 = function (element) {
    var tmp$, tmp$_0;
    var $receiver = element.children('.phr').text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return element.text();
    }
    var phr = tmp$;
    var $receiver_0 = element.children('.cit-type-translation').text();
    tmp$_0 = !isBlank($receiver_0) ? $receiver_0 : null;
    if (tmp$_0 == null) {
      return element.text();
    }
    var translation = tmp$_0;
    return joinToString_0([phr, translation], '\r\n');
  };
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  ItParser.prototype.formatParenthesis_0 = function (textValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.removeParenthesisReg_0.matchEntire_6bul2c$(trim(Kotlin.isCharSequence(tmp$_3 = textValue) ? tmp$_3 : throwCCE()).toString())) != null ? tmp$.groups : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null ? tmp$_1.value : null) != null ? tmp$_2 : textValue;
  };
  ItParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItParser',
    interfaces: [DictHtmlParser]
  };
  function PtParser() {
  }
  function PtParser$parse$lambda(this$PtParser) {
    return function (it) {
      return this$PtParser.parseSenseItemPart_0(it);
    };
  }
  PtParser.prototype.parse_61zpoe$ = function (html) {
    var tmp$;
    var jq = jQuery(html);
    var mainPart = jq.find('.cb-def').has('.definitions').first();
    var cbh = mainPart.children('.cB-h');
    var $receiver = cbh.children('.h2_entry').first().text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return null;
    }
    var query = tmp$;
    var $receiver_0 = cbh.children('.mini_h2').find('.pron').text();
    var pronunciation = !isBlank($receiver_0) ? $receiver_0 : null;
    var audioUrl = cbh.children('.mini_h2').find('a.sound').attr('data-src-mp3');
    var parts = mapToList(mainPart.children('.definitions').children('.hom').has('.sense'), PtParser$parse$lambda(this));
    return new DictItem(query, pronunciation, audioUrl, copyToArray(parts));
  };
  function PtParser$parseSenseItemPart$lambda(this$PtParser) {
    return function (it) {
      return this$PtParser.parseSenseListItem_0(it);
    };
  }
  PtParser.prototype.parseSenseItemPart_0 = function (element) {
    var pos = element.children('.gramGrp').find('.pos').first().text();
    var senses = mapToList(element.children('.sense'), PtParser$parseSenseItemPart$lambda(this));
    return new DictItemCategory(pos, copyToArray(senses));
  };
  function PtParser$parseSenseListItem$lambda(this$PtParser) {
    return function (it) {
      return this$PtParser.parseSenseLine_0(it);
    };
  }
  function PtParser$parseSenseListItem$lambda_0(this$PtParser) {
    return function (it) {
      return this$PtParser.parseSenseItemExample_0(it);
    };
  }
  function PtParser$parseSenseListItem$lambda_1(this$PtParser) {
    return function (it) {
      return this$PtParser.parseSenseItemPhases_0(it);
    };
  }
  PtParser.prototype.parseSenseListItem_0 = function (element) {
    var subLineElements = element.children('.sense');
    var lines = mapToList(subLineElements.add(element), PtParser$parseSenseListItem$lambda(this));
    var examples = mapToList(element.children('.type-example'), PtParser$parseSenseListItem$lambda_0(this));
    var phrases = mapToList(element.children('.type-phr'), PtParser$parseSenseListItem$lambda_1(this));
    var $receiver = ArrayList_init();
    $receiver.addAll_brywnq$(examples);
    $receiver.addAll_brywnq$(phrases);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      if (!isBlank(element_0))
        destination.add_11rb$(element_0);
    }
    var usages = destination;
    return new DictItemSenseItem(copyToArray(lines), void 0, copyToArray(usages));
  };
  PtParser.prototype.parseSenseLine_0 = function (element) {
    var translation = element.children('.type-translation').text();
    var label = element.children('.lbl').text();
    var colloc = element.children('.gramGrp').text();
    var $receiver = [translation, label, colloc];
    var all$result;
    all$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element_0 = $receiver[tmp$];
        if (!isBlank(element_0)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    var isBlank_0 = all$result;
    if (isBlank_0 && numberToInt(element.has('.sense').length) === 0) {
      if (numberToInt(element.children('.re').has('.type-phr').length) > 0) {
        return this.parsePhrAsSenseList_0(element.children('.re').has('.type-phr'));
      }
    }
    var $receiver_0 = listOf([label, colloc]);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_1 = tmp$_0.next();
      if (!isBlank(element_1))
        destination.add_11rb$(element_1);
    }
    return new DictItemSenseItemLine(translation, copyToArray(destination));
  };
  PtParser.prototype.parsePhrAsSenseList_0 = function (element) {
    var orth = element.children('.type-phr').text();
    var translation = element.children('.type-translation').text();
    if (isBlank(orth) && isBlank(translation)) {
      return null;
    }
    return new DictItemSenseItemLine(translation, [orth]);
  };
  PtParser.prototype.parseSenseItemExample_0 = function (element) {
    var quote = element.children('.quote').text();
    var translation = element.children('.type-translation').text();
    return quote + '\r\n' + translation;
  };
  PtParser.prototype.parseSenseItemPhases_0 = function (element) {
    var phr = element.children('.type-phr').text();
    var translation = element.children('.type-translation').text();
    return phr + '\r\n' + translation;
  };
  PtParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PtParser',
    interfaces: [DictHtmlParser]
  };
  function DictItem(query, pronunciation, audioUrl, categories) {
    if (pronunciation === void 0)
      pronunciation = null;
    if (audioUrl === void 0)
      audioUrl = null;
    this.query = query;
    this.pronunciation = pronunciation;
    this.audioUrl = audioUrl;
    this.categories = categories;
  }
  DictItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DictItem',
    interfaces: []
  };
  DictItem.prototype.component1 = function () {
    return this.query;
  };
  DictItem.prototype.component2 = function () {
    return this.pronunciation;
  };
  DictItem.prototype.component3 = function () {
    return this.audioUrl;
  };
  DictItem.prototype.component4 = function () {
    return this.categories;
  };
  DictItem.prototype.copy_nsxp54$ = function (query, pronunciation, audioUrl, categories) {
    return new DictItem(query === void 0 ? this.query : query, pronunciation === void 0 ? this.pronunciation : pronunciation, audioUrl === void 0 ? this.audioUrl : audioUrl, categories === void 0 ? this.categories : categories);
  };
  DictItem.prototype.toString = function () {
    return 'DictItem(query=' + Kotlin.toString(this.query) + (', pronunciation=' + Kotlin.toString(this.pronunciation)) + (', audioUrl=' + Kotlin.toString(this.audioUrl)) + (', categories=' + Kotlin.toString(this.categories)) + ')';
  };
  DictItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.pronunciation) | 0;
    result = result * 31 + Kotlin.hashCode(this.audioUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    return result;
  };
  DictItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.query, other.query) && Kotlin.equals(this.pronunciation, other.pronunciation) && Kotlin.equals(this.audioUrl, other.audioUrl) && Kotlin.equals(this.categories, other.categories)))));
  };
  function DictItemCategory(pos, senses) {
    this.pos = pos;
    this.senses = senses;
  }
  DictItemCategory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DictItemCategory',
    interfaces: []
  };
  DictItemCategory.prototype.component1 = function () {
    return this.pos;
  };
  DictItemCategory.prototype.component2 = function () {
    return this.senses;
  };
  DictItemCategory.prototype.copy_ls6bdh$ = function (pos, senses) {
    return new DictItemCategory(pos === void 0 ? this.pos : pos, senses === void 0 ? this.senses : senses);
  };
  DictItemCategory.prototype.toString = function () {
    return 'DictItemCategory(pos=' + Kotlin.toString(this.pos) + (', senses=' + Kotlin.toString(this.senses)) + ')';
  };
  DictItemCategory.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.senses) | 0;
    return result;
  };
  DictItemCategory.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.senses, other.senses)))));
  };
  function DictItemSenseItem(lines, labels, exmaples) {
    if (labels === void 0) {
      labels = [];
    }
    if (exmaples === void 0) {
      exmaples = [];
    }
    this.lines = lines;
    this.labels = labels;
    this.exmaples = exmaples;
  }
  DictItemSenseItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DictItemSenseItem',
    interfaces: []
  };
  DictItemSenseItem.prototype.component1 = function () {
    return this.lines;
  };
  DictItemSenseItem.prototype.component2 = function () {
    return this.labels;
  };
  DictItemSenseItem.prototype.component3 = function () {
    return this.exmaples;
  };
  DictItemSenseItem.prototype.copy_gtketl$ = function (lines, labels, exmaples) {
    return new DictItemSenseItem(lines === void 0 ? this.lines : lines, labels === void 0 ? this.labels : labels, exmaples === void 0 ? this.exmaples : exmaples);
  };
  DictItemSenseItem.prototype.toString = function () {
    return 'DictItemSenseItem(lines=' + Kotlin.toString(this.lines) + (', labels=' + Kotlin.toString(this.labels)) + (', exmaples=' + Kotlin.toString(this.exmaples)) + ')';
  };
  DictItemSenseItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lines) | 0;
    result = result * 31 + Kotlin.hashCode(this.labels) | 0;
    result = result * 31 + Kotlin.hashCode(this.exmaples) | 0;
    return result;
  };
  DictItemSenseItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lines, other.lines) && Kotlin.equals(this.labels, other.labels) && Kotlin.equals(this.exmaples, other.exmaples)))));
  };
  function DictItemSenseItemLine(translation, prefix, suffix) {
    if (prefix === void 0) {
      prefix = [];
    }
    if (suffix === void 0) {
      suffix = [];
    }
    this.translation = translation;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  DictItemSenseItemLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DictItemSenseItemLine',
    interfaces: []
  };
  DictItemSenseItemLine.prototype.component1 = function () {
    return this.translation;
  };
  DictItemSenseItemLine.prototype.component2 = function () {
    return this.prefix;
  };
  DictItemSenseItemLine.prototype.component3 = function () {
    return this.suffix;
  };
  DictItemSenseItemLine.prototype.copy_8qkpfe$ = function (translation, prefix, suffix) {
    return new DictItemSenseItemLine(translation === void 0 ? this.translation : translation, prefix === void 0 ? this.prefix : prefix, suffix === void 0 ? this.suffix : suffix);
  };
  DictItemSenseItemLine.prototype.toString = function () {
    return 'DictItemSenseItemLine(translation=' + Kotlin.toString(this.translation) + (', prefix=' + Kotlin.toString(this.prefix)) + (', suffix=' + Kotlin.toString(this.suffix)) + ')';
  };
  DictItemSenseItemLine.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.translation) | 0;
    result = result * 31 + Kotlin.hashCode(this.prefix) | 0;
    result = result * 31 + Kotlin.hashCode(this.suffix) | 0;
    return result;
  };
  DictItemSenseItemLine.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.translation, other.translation) && Kotlin.equals(this.prefix, other.prefix) && Kotlin.equals(this.suffix, other.suffix)))));
  };
  function renderItem$lambda$lambda$lambda(closure$q) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + getFrom(closure$q) + ']');
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda_0(closure$item) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$item.query);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda(closure$item) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = closure$item.pronunciation) != null) {
        $receiver.unaryPlus_pdl1vz$('[' + tmp$ + ']');
      }
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda_1(closure$item) {
    return function ($receiver) {
      em($receiver, void 0, renderItem$lambda$lambda$lambda$lambda(closure$item));
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda(closure$audioUrl) {
    return function ($receiver) {
      $receiver.src = closure$audioUrl;
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda_0(closure$audioUrl) {
    return function ($receiver) {
      audio($receiver, void 0, renderItem$lambda$lambda$lambda$lambda$lambda(closure$audioUrl));
      return Unit;
    };
  }
  function renderItem$lambda$lambda(closure$q, closure$item) {
    return function ($receiver) {
      var tmp$;
      em($receiver, 'translation-lang', renderItem$lambda$lambda$lambda(closure$q));
      strong($receiver, void 0, renderItem$lambda$lambda$lambda_0(closure$item));
      $receiver.unaryPlus_pdl1vz$(' ');
      span($receiver, 'translation-pronunciation', renderItem$lambda$lambda$lambda_1(closure$item));
      $receiver.unaryPlus_pdl1vz$(' ');
      if ((tmp$ = closure$item.audioUrl) != null) {
        span($receiver, 'translation-voice', renderItem$lambda$lambda$lambda$lambda_0(tmp$));
      }
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda_1(closure$q) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + getTo(closure$q) + ']');
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda_2($receiver) {
    set_role($receiver, 'button');
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'collapse';
    $receiver_0.put_xwzc9p$(key, value);
    $receiver.unaryPlus_pdl1vz$('\uD83D\uDCDA');
    return Unit;
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$part) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$part.pos);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$part) {
    return function ($receiver) {
      strong($receiver, void 0, renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$part));
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$part) {
    return function ($receiver) {
      em($receiver, 'translation-poc', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$part));
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$line) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$line.translation);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$line) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$line.translation);
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$line) {
    return function ($receiver) {
      var $receiver_0 = closure$line.prefix;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        em($receiver, 'badge badge-light', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
        $receiver.unaryPlus_pdl1vz$(' ');
      }
      span($receiver, 'translation-primary', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$line));
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$listItem) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'padding-left: 0; list-style: none;';
      $receiver_0.put_xwzc9p$('style', value);
      var $receiver_1 = closure$listItem.lines;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
        var element = $receiver_1[tmp$];
        li($receiver, void 0, renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(element));
      }
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$titleStr, closure$listItem) {
    return function ($receiver) {
      var tmp$;
      set_title($receiver, closure$titleStr);
      var $receiver_0 = $receiver.attributes;
      var key = 'data-toggle';
      $receiver_0.put_xwzc9p$(key, 'tooltip');
      var $receiver_1 = closure$listItem.labels;
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
        var element = $receiver_1[tmp$_0];
        em($receiver, 'translation-secondary', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
        $receiver.unaryPlus_pdl1vz$(' ');
      }
      if (closure$listItem.lines.length < 2) {
        if ((tmp$ = firstOrNull(closure$listItem.lines)) != null) {
          var $receiver_2 = tmp$.prefix;
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver_2.length; ++tmp$_1) {
            var element_0 = $receiver_2[tmp$_1];
            span($receiver, 'badge badge-light', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element_0));
            $receiver.unaryPlus_pdl1vz$(' ');
          }
          span($receiver, 'translation-primary', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(tmp$));
        }
      }
       else {
        ul($receiver, void 0, renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$listItem));
      }
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda$lambda_0(closure$item) {
    return function ($receiver) {
      var $receiver_0 = closure$item.categories;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        li($receiver, 'list-group-item', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
        var $receiver_1 = element.senses;
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
          var element_0 = $receiver_1[tmp$_0];
          var lineBreak = '\r\n';
          var titleStr = joinToString_0(element_0.exmaples, lineBreak + lineBreak);
          li($receiver, 'list-group-item small', renderItem$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(titleStr, element_0));
        }
      }
      return Unit;
    };
  }
  function renderItem$lambda$lambda$lambda$lambda_3(closure$detailId, closure$item) {
    return function ($receiver) {
      set_id($receiver, closure$detailId);
      ul($receiver, 'list-group', renderItem$lambda$lambda$lambda$lambda$lambda_0(closure$item));
      return Unit;
    };
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var mapNotNullTo$lambda_0 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  function renderItem$lambda$lambda$lambda_2(closure$q, closure$item) {
    return function ($receiver) {
      var detailId = 'collins' + Random.Default.nextInt();
      em($receiver, 'translation-lang', renderItem$lambda$lambda$lambda$lambda_1(closure$q));
      var $receiver_0 = closure$item.categories;
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var list = toList(element.senses);
        addAll(destination, list);
      }
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var list_0 = toList(element_0.lines);
        addAll(destination_0, list_0);
      }
      var destination_1 = ArrayList_init();
      var tmp$_1;
      tmp$_1 = destination_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        var tmp$_0_0;
        if ((tmp$_0_0 = element_1.translation) != null) {
          destination_1.add_11rb$(tmp$_0_0);
        }
      }
      var first$result;
      first$break: do {
        var tmp$_2;
        tmp$_2 = destination_1.iterator();
        while (tmp$_2.hasNext()) {
          var element_2 = tmp$_2.next();
          if (!isBlank(element_2)) {
            first$result = element_2;
            break first$break;
          }
        }
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      var firstTranslation = first$result;
      $receiver.unaryPlus_pdl1vz$(firstTranslation);
      a($receiver, '#' + detailId, void 0, 'btn btn-light btn-sm mb-2', renderItem$lambda$lambda$lambda$lambda_2);
      div_0($receiver, 'collapse', renderItem$lambda$lambda$lambda$lambda_3(detailId, closure$item));
      return Unit;
    };
  }
  function renderItem$lambda$lambda_0(closure$q, closure$item) {
    return function ($receiver) {
      li($receiver, 'list-group-item', renderItem$lambda$lambda$lambda_2(closure$q, closure$item));
      return Unit;
    };
  }
  function renderItem$lambda(closure$q, closure$item) {
    return function ($receiver) {
      div_0($receiver, 'alert alert-info', renderItem$lambda$lambda(closure$q, closure$item));
      ul($receiver, 'list-group', renderItem$lambda$lambda_0(closure$q, closure$item));
      return Unit;
    };
  }
  function renderItem(q, item) {
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    div(container, 't-result', renderItem$lambda(q, item));
    renderSource_0(container, q);
    return stringBuilder.toString();
  }
  function sourceUrl(query) {
    var baseUrl = 'https://www.collinsdictionary.com/dictionary';
    var $receiver = getText(query);
    var tmp$;
    var queryText = replace(trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString(), ' ', '-');
    var dictionaryMap = mapOf([to(to('en', 'zh-CN'), 'english-chinese'), to(to('en', 'zh-TW'), 'english-chinese'), to(to('zh-CN', 'en'), 'chinese-english'), to(to('zh-TW', 'en'), 'chinese-english'), to(to('en', 'fr'), 'english-french'), to(to('fr', 'en'), 'french-english'), to(to('en', 'de'), 'english-german'), to(to('de', 'en'), 'german-english'), to(to('en', 'es'), 'english-spanish'), to(to('es', 'en'), 'spanish-english'), to(to('en', 'pt'), 'english-portuguese'), to(to('pt', 'en'), 'portuguese-english'), to(to('en', 'it'), 'english-italian'), to(to('it', 'en'), 'italian-english')]);
    return baseUrl + '/' + toString(dictionaryMap.get_11rb$(to(getFrom(query), getTo(query)))) + '/' + queryText;
  }
  function logoBgColor(query) {
    var tmp$;
    var colorMap = mapOf([to(to('en', 'zh-CN'), '#af1e21'), to(to('en', 'zh-TW'), '#af1e21'), to(to('zh-CN', 'en'), '#af1e21'), to(to('zh-TW', 'en'), '#af1e21'), to(to('en', 'fr'), '#0069b3'), to(to('fr', 'en'), '#0069b3'), to(to('en', 'de'), '#434448'), to(to('de', 'en'), '#434448'), to(to('en', 'es'), '#ee6603'), to(to('es', 'en'), '#ee6603'), to(to('en', 'pt'), '#34ab99'), to(to('pt', 'en'), '#34ab99'), to(to('en', 'it'), '#3ea434'), to(to('it', 'en'), '#3ea434')]);
    return (tmp$ = colorMap.get_11rb$(to(getFrom(query), getTo(query)))) != null ? tmp$ : 'transparent';
  }
  function renderSource$lambda$lambda$lambda$lambda(closure$query) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'background-color: ' + logoBgColor(closure$query) + '; padding:1px';
      $receiver_0.put_xwzc9p$('style', value);
      $receiver.height = '16';
      return Unit;
    };
  }
  function renderSource$lambda$lambda$lambda_0(closure$query) {
    return function ($receiver) {
      $receiver.target = '_blank';
      img($receiver, void 0, 'https://www.collinsdictionary.com/external/images/logo.png?version=3.1.249', void 0, renderSource$lambda$lambda$lambda$lambda(closure$query));
      return Unit;
    };
  }
  function renderSource$lambda$lambda_0(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Powered by ');
      a($receiver, sourceUrl(closure$query), void 0, void 0, renderSource$lambda$lambda$lambda_0(closure$query));
      return Unit;
    };
  }
  function renderSource$lambda_0(closure$query) {
    return function ($receiver) {
      small($receiver, void 0, renderSource$lambda$lambda_0(closure$query));
      return Unit;
    };
  }
  function renderSource_0(container, query) {
    div(container, 'translation-source', renderSource$lambda_0(query));
  }
  function removeTagForJquery(html, unsupportedTags) {
    var tmp$;
    var replacedHtml = html;
    for (tmp$ = 0; tmp$ !== unsupportedTags.length; ++tmp$) {
      var tag = unsupportedTags[tmp$];
      var regex = Regex_init('<' + tag + '[^>]*?>');
      var $receiver = replacedHtml;
      replacedHtml = regex.replace_x2uqeu$($receiver, '');
    }
    return replacedHtml;
  }
  function mapToList$lambda(closure$mapFunc, closure$results) {
    return function (f, elem) {
      var tmp$;
      var jqElem = jQuery(elem);
      if ((tmp$ = closure$mapFunc(jqElem)) != null) {
        closure$results.add_11rb$(tmp$);
      }
      return true;
    };
  }
  function mapToList($receiver, mapFunc) {
    var results = ArrayList_init();
    $receiver.each(mapToList$lambda(mapFunc, results));
    return results;
  }
  function renderFailure$lambda_2(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('No result found for ' + '"' + getText(closure$query) + '"');
      return Unit;
    };
  }
  function renderFailure$lambda_3(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Parse query html failed ' + '"' + getText(closure$query) + '"');
      return Unit;
    };
  }
  function renderFailure$lambda_4(closure$failure) {
    return function ($receiver) {
      var tmp$;
      $receiver.unaryPlus_pdl1vz$((tmp$ = closure$failure.message) != null ? tmp$ : 'Error when calling service');
      return Unit;
    };
  }
  function renderFailure_0(query, failure) {
    console.error('Failure from ' + ID + ' on ' + query, failure);
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    if (Kotlin.isType(failure, TranslationNotFoundException))
      p(container, 'translation-failure alert alert-warning', renderFailure$lambda_2(query));
    else if (Kotlin.isType(failure, TranslationParsingFailureException))
      p(container, 'translation-failure alert alert-danger', renderFailure$lambda_3(query));
    else {
      p(container, 'translation-failure alert alert-warning', renderFailure$lambda_4(failure));
    }
    renderBugReport(container, ID, query, failure);
    renderSource_0(container, query);
    return stringBuilder.toString();
  }
  function ZhParser() {
    this.removeParenthesisReg_0 = Regex_init('\\((.+)\\)');
  }
  function ZhParser$parse$lambda(this$ZhParser) {
    return function (it) {
      return this$ZhParser.parseDictItemCategory_0(it);
    };
  }
  ZhParser.prototype.parse_61zpoe$ = function (html) {
    var tmp$;
    var jq = jQuery(html);
    var mainPart = jq.find('.he').has('.hom').first();
    var cbh = mainPart.find('.cB-h').first();
    var $receiver = cbh.children('.h2_entry').first().text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return null;
    }
    var query = tmp$;
    var $receiver_0 = this.parsePronunciation_0(cbh.children('.pron').first());
    var pronunciation = !isBlank($receiver_0) ? $receiver_0 : null;
    var parts = mapToList(mainPart.find('.hom'), ZhParser$parse$lambda(this));
    return new DictItem(query, pronunciation, void 0, copyToArray(parts));
  };
  ZhParser.prototype.parsePronunciation_0 = function (element) {
    return this.formatParenthesis_0(element.text());
  };
  function ZhParser$parseDictItemCategory$lambda(this$ZhParser) {
    return function (it) {
      return this$ZhParser.parseSenseList_0(it);
    };
  }
  ZhParser.prototype.parseDictItemCategory_0 = function (element) {
    var pos = element.find('.gramGrp .pos').text();
    var senses = copyToArray(mapToList(element.children('.sense_list').children('.sense_list_item'), ZhParser$parseDictItemCategory$lambda(this)));
    return new DictItemCategory(pos, senses);
  };
  function ZhParser$parseSenseList$lambda(this$ZhParser) {
    return function (it) {
      return this$ZhParser.parseSenseLine_0(it);
    };
  }
  function ZhParser$parseSenseList$lambda_0(this$ZhParser) {
    return function (it) {
      return this$ZhParser.parseSenseLine_0(it);
    };
  }
  function ZhParser$parseSenseList$lambda_1(this$ZhParser) {
    return function (it) {
      return this$ZhParser.parseSenseItemExample_0(it);
    };
  }
  ZhParser.prototype.parseSenseList_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    var subLineElements = element.find('li.sense_list_item');
    if (numberToInt(subLineElements.length) > 0) {
      tmp$_1 = mapToList(subLineElements, ZhParser$parseSenseList$lambda(this));
    }
     else {
      if (numberToInt(element.has('.phrase').length) > 0) {
        tmp$_1 = mapToList(element.add(element.children('.phrase')).has('.cit-type-translation'), ZhParser$parseSenseList$lambda_0(this));
      }
       else {
        tmp$_1 = (tmp$_0 = (tmp$ = this.parseSenseLine_0(element)) != null ? listOf_0(tmp$) : null) != null ? tmp$_0 : emptyList();
      }
    }
    var lines = tmp$_1;
    var exampleList = mapToList(element.find('.cit-type-example'), ZhParser$parseSenseList$lambda_1(this));
    return new DictItemSenseItem(copyToArray(lines), void 0, copyToArray(exampleList));
  };
  var mapNotNullTo$lambda_1 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  ZhParser.prototype.parseSenseLine_0 = function (element) {
    var tmp$, tmp$_0;
    var $receiver = ['lbl', 'phr', 'gramGrp'];
    var destination = ArrayList_init();
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element_0 = $receiver[tmp$_1];
      var tmp$_0_0;
      var $receiver_0 = element.children('.' + element_0).text();
      if ((tmp$_0_0 = $receiver_0.length > 0 ? $receiver_0 : null) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    var labels = destination;
    var $receiver_1 = element.children('.cit-type-translation').text();
    tmp$ = !isBlank($receiver_1) ? $receiver_1 : null;
    if (tmp$ == null) {
      return null;
    }
    var translation = tmp$;
    var $receiver_2 = element.children('.orth').text();
    var translationPron = !isBlank($receiver_2) ? $receiver_2 : null;
    return new DictItemSenseItemLine(translation, copyToArray(labels), (tmp$_0 = translationPron != null ? [translationPron] : null) != null ? tmp$_0 : []);
  };
  ZhParser.prototype.parseSenseItemExample_0 = function (element) {
    var tmp$, tmp$_0;
    var $receiver = element.children('.orth').text();
    tmp$ = !isBlank($receiver) ? $receiver : null;
    if (tmp$ == null) {
      return element.text();
    }
    var orth = tmp$;
    var $receiver_0 = element.children('.cit-type-translation').text();
    tmp$_0 = !isBlank($receiver_0) ? $receiver_0 : null;
    if (tmp$_0 == null) {
      return element.text();
    }
    var translation = tmp$_0;
    var pron = element.find('.orth .pron').text();
    return joinToString_0([orth, translation, pron], '\r\n');
  };
  ZhParser.prototype.formatParenthesis_0 = function (textValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.removeParenthesisReg_0.matchEntire_6bul2c$(trim(Kotlin.isCharSequence(tmp$_3 = textValue) ? tmp$_3 : throwCCE()).toString())) != null ? tmp$.groups : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null ? tmp$_1.value : null) != null ? tmp$_2 : textValue;
  };
  ZhParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZhParser',
    interfaces: [DictHtmlParser]
  };
  _.jSelect_61zpoe$ = jSelect;
  var package$org = _.org || (_.org = {});
  var package$dicthub = package$org.dicthub || (package$org.dicthub = {});
  var package$plugin = package$dicthub.plugin || (package$dicthub.plugin = {});
  var package$shared = package$plugin.shared || (package$plugin.shared = {});
  var package$util = package$shared.util || (package$shared.util = {});
  package$util.TranslationException_init_dbl4no$ = TranslationException_init;
  package$util.TranslationException = TranslationException;
  package$util.TranslationHttpFailureException = TranslationHttpFailureException;
  package$util.TranslationNotFoundException = TranslationNotFoundException;
  package$util.TranslationParsingFailureException = TranslationParsingFailureException;
  package$util.HttpAsyncClient = HttpAsyncClient;
  Object.defineProperty(package$util, 'AjaxHttpClient', {
    get: AjaxHttpClient_getInstance
  });
  package$util.andThen_g414bn$ = andThen;
  package$util.convert_wus875$ = convert;
  package$util.allPromises_m47hm4$ = allPromises;
  package$util.allPromises_t4ctt0$ = allPromises_0;
  package$util.builtinSourceIcon_61zpoe$ = builtinSourceIcon;
  package$util.renderSource_45shcv$ = renderSource;
  package$util.renderBugReport_wsdkps$ = renderBugReport;
  package$util.renderFailure_5kevx$ = renderFailure;
  package$util.getText_t1yf75$ = getText;
  package$util.getFrom_t1yf75$ = getFrom;
  package$util.getTo_t1yf75$ = getTo;
  package$util.createQuery_6hosri$ = createQuery;
  package$util.getName_t1yf75$ = getName;
  package$util.getDescription_t1yf75$ = getDescription;
  package$util.getSource_t1yf75$ = getSource;
  package$util.getSourceUrl_t1yf75$ = getSourceUrl;
  package$util.getAuthor_t1yf75$ = getAuthor;
  package$util.getAuthorUrl_t1yf75$ = getAuthorUrl;
  package$util.getOptions_t1yf75$ = getOptions;
  package$util.getOption_fxvzox$ = getOption;
  package$util.getType_t1yf75$ = getType;
  package$util.getOptionDescription_t1yf75$ = getOptionDescription;
  package$util.getDefault_t1yf75$ = getDefault;
  package$util.createMeta_ebpex8$ = createMeta;
  package$util.createMetaOptionConfig_5p2dge$ = createMetaOptionConfig;
  package$util.TranslationProvider = TranslationProvider;
  package$util.attribute_mxpdhj$ = attribute;
  _.create_plugin_com_collinsdictionary = create_plugin_com_collinsdictionary;
  var package$com_collinsdictionary = package$dicthub.com_collinsdictionary || (package$dicthub.com_collinsdictionary = {});
  Object.defineProperty(package$com_collinsdictionary, 'ID', {
    get: function () {
      return ID;
    }
  });
  package$com_collinsdictionary.DictHtmlParser = DictHtmlParser;
  package$com_collinsdictionary.CollinsDictionaryProvider = CollinsDictionaryProvider;
  package$com_collinsdictionary.DeParser = DeParser;
  package$com_collinsdictionary.EsParser = EsParser;
  package$com_collinsdictionary.FrParser = FrParser;
  package$com_collinsdictionary.ItParser = ItParser;
  package$com_collinsdictionary.PtParser = PtParser;
  package$com_collinsdictionary.DictItem = DictItem;
  package$com_collinsdictionary.DictItemCategory = DictItemCategory;
  package$com_collinsdictionary.DictItemSenseItem = DictItemSenseItem;
  package$com_collinsdictionary.DictItemSenseItemLine = DictItemSenseItemLine;
  package$com_collinsdictionary.renderItem_wy8ybi$ = renderItem;
  package$com_collinsdictionary.sourceUrl_qk3xy8$ = sourceUrl;
  package$com_collinsdictionary.renderSource_bpqvj$ = renderSource_0;
  package$com_collinsdictionary.removeTagForJquery_60y5e1$ = removeTagForJquery;
  package$com_collinsdictionary.mapToList_qivrkj$ = mapToList;
  package$com_collinsdictionary.renderFailure_9wnz7l$ = renderFailure_0;
  package$com_collinsdictionary.ZhParser = ZhParser;
  CollinsDictionaryProvider.prototype.updateOptions = TranslationProvider.prototype.updateOptions;
  ID = 'plugin-com-collinsdictionary';
  Kotlin.defineModule('plugin-com-collinsdictionary', _);
  return _;
}(typeof this['plugin-com-collinsdictionary'] === 'undefined' ? {} : this['plugin-com-collinsdictionary'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=plugin-com-collinsdictionary.js.map
