if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'plugin-com-bing-translator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'plugin-com-bing-translator'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'plugin-com-bing-translator'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'plugin-com-bing-translator'.");
}
this['plugin-com-bing-translator'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
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
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var em = $module$kotlinx_html_js.kotlinx.html.em_2lgk3j$;
  var strong = $module$kotlinx_html_js.kotlinx.html.strong_okpg28$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var Random = Kotlin.kotlin.random.Random;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
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
  var andThen = defineInlineFunction('plugin-com-bing-translator.org.dicthub.plugin.shared.util.andThen_g414bn$', wrapFunction(function () {
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
  var convert = defineInlineFunction('plugin-com-bing-translator.org.dicthub.plugin.shared.util.convert_wus875$', wrapFunction(function () {
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
  var allPromises = defineInlineFunction('plugin-com-bing-translator.org.dicthub.plugin.shared.util.allPromises_m47hm4$', wrapFunction(function () {
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
  var allPromises_0 = defineInlineFunction('plugin-com-bing-translator.org.dicthub.plugin.shared.util.allPromises_t4ctt0$', wrapFunction(function () {
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
  function create_plugin_com_bing_translator() {
    return new BingTranslationProvider(AjaxHttpClient_getInstance(), new BingTranslationRenderer());
  }
  function BingTranslation(sourceUrl, from, to, query, queryVoice, translation, translationVoice, details) {
    this.sourceUrl = sourceUrl;
    this.from = from;
    this.to = to;
    this.query = query;
    this.queryVoice = queryVoice;
    this.translation = translation;
    this.translationVoice = translationVoice;
    this.details = details;
  }
  BingTranslation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingTranslation',
    interfaces: []
  };
  BingTranslation.prototype.component1 = function () {
    return this.sourceUrl;
  };
  BingTranslation.prototype.component2 = function () {
    return this.from;
  };
  BingTranslation.prototype.component3 = function () {
    return this.to;
  };
  BingTranslation.prototype.component4 = function () {
    return this.query;
  };
  BingTranslation.prototype.component5 = function () {
    return this.queryVoice;
  };
  BingTranslation.prototype.component6 = function () {
    return this.translation;
  };
  BingTranslation.prototype.component7 = function () {
    return this.translationVoice;
  };
  BingTranslation.prototype.component8 = function () {
    return this.details;
  };
  BingTranslation.prototype.copy_yx1y89$ = function (sourceUrl, from, to, query, queryVoice, translation, translationVoice, details) {
    return new BingTranslation(sourceUrl === void 0 ? this.sourceUrl : sourceUrl, from === void 0 ? this.from : from, to === void 0 ? this.to : to, query === void 0 ? this.query : query, queryVoice === void 0 ? this.queryVoice : queryVoice, translation === void 0 ? this.translation : translation, translationVoice === void 0 ? this.translationVoice : translationVoice, details === void 0 ? this.details : details);
  };
  BingTranslation.prototype.toString = function () {
    return 'BingTranslation(sourceUrl=' + Kotlin.toString(this.sourceUrl) + (', from=' + Kotlin.toString(this.from)) + (', to=' + Kotlin.toString(this.to)) + (', query=' + Kotlin.toString(this.query)) + (', queryVoice=' + Kotlin.toString(this.queryVoice)) + (', translation=' + Kotlin.toString(this.translation)) + (', translationVoice=' + Kotlin.toString(this.translationVoice)) + (', details=' + Kotlin.toString(this.details)) + ')';
  };
  BingTranslation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sourceUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.queryVoice) | 0;
    result = result * 31 + Kotlin.hashCode(this.translation) | 0;
    result = result * 31 + Kotlin.hashCode(this.translationVoice) | 0;
    result = result * 31 + Kotlin.hashCode(this.details) | 0;
    return result;
  };
  BingTranslation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sourceUrl, other.sourceUrl) && Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.query, other.query) && Kotlin.equals(this.queryVoice, other.queryVoice) && Kotlin.equals(this.translation, other.translation) && Kotlin.equals(this.translationVoice, other.translationVoice) && Kotlin.equals(this.details, other.details)))));
  };
  function Detail(poc, meanings) {
    this.poc = poc;
    this.meanings = meanings;
  }
  Detail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Detail',
    interfaces: []
  };
  Detail.prototype.component1 = function () {
    return this.poc;
  };
  Detail.prototype.component2 = function () {
    return this.meanings;
  };
  Detail.prototype.copy_a5zxyn$ = function (poc, meanings) {
    return new Detail(poc === void 0 ? this.poc : poc, meanings === void 0 ? this.meanings : meanings);
  };
  Detail.prototype.toString = function () {
    return 'Detail(poc=' + Kotlin.toString(this.poc) + (', meanings=' + Kotlin.toString(this.meanings)) + ')';
  };
  Detail.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.poc) | 0;
    result = result * 31 + Kotlin.hashCode(this.meanings) | 0;
    return result;
  };
  Detail.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.poc, other.poc) && Kotlin.equals(this.meanings, other.meanings)))));
  };
  function Meaning(meaning, examples) {
    this.meaning = meaning;
    this.examples = examples;
  }
  Meaning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Meaning',
    interfaces: []
  };
  Meaning.prototype.component1 = function () {
    return this.meaning;
  };
  Meaning.prototype.component2 = function () {
    return this.examples;
  };
  Meaning.prototype.copy_kwv3np$ = function (meaning, examples) {
    return new Meaning(meaning === void 0 ? this.meaning : meaning, examples === void 0 ? this.examples : examples);
  };
  Meaning.prototype.toString = function () {
    return 'Meaning(meaning=' + Kotlin.toString(this.meaning) + (', examples=' + Kotlin.toString(this.examples)) + ')';
  };
  Meaning.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.meaning) | 0;
    result = result * 31 + Kotlin.hashCode(this.examples) | 0;
    return result;
  };
  Meaning.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.meaning, other.meaning) && Kotlin.equals(this.examples, other.examples)))));
  };
  var ID;
  function BingTranslationProvider(httpClient, renderer) {
    this.httpClient_0 = httpClient;
    this.renderer_0 = renderer;
    this.domainStorageKey_0 = 'plugin-bing-domain';
    this.tokenStorageKey_0 = 'plugin-bing-token';
  }
  BingTranslationProvider.prototype.id = function () {
    return ID;
  };
  BingTranslationProvider.prototype.meta = function () {
    return createMeta('Bing microsoft translator', 'Bing multiple language translation', 'Bing Microsoft Translator', 'https://www.bing.com/translator', 'DictHub', 'https://github.com/willings/DictHub');
  };
  BingTranslationProvider.prototype.canTranslate = function (query) {
    return typeof langCodeMap[getFrom(query)] === 'string' && typeof langCodeMap[getTo(query)] === 'string';
  };
  function BingTranslationProvider$translate$lambda$lambda(this$BingTranslationProvider, closure$query, closure$resolve) {
    return function (newContext) {
      console.info('Translated using new BingContext: ' + newContext.domain + ', ' + newContext.token);
      this$BingTranslationProvider.saveContextToCache_0(newContext);
      return this$BingTranslationProvider.translateWithContext_0(newContext, closure$query, true).then(closure$resolve);
    };
  }
  function BingTranslationProvider$translate$lambda(this$BingTranslationProvider, closure$query) {
    return function (resolve) {
      getBingContext().then(BingTranslationProvider$translate$lambda$lambda(this$BingTranslationProvider, closure$query, resolve));
    };
  }
  function BingTranslationProvider$translate$lambda$lambda$lambda(closure$translateWithNewToken, closure$resolve) {
    return function (it) {
      closure$translateWithNewToken(closure$resolve);
      return Unit;
    };
  }
  function BingTranslationProvider$translate$lambda_0(this$BingTranslationProvider, closure$query, closure$translateWithNewToken) {
    return function (resolve, f) {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this$BingTranslationProvider.loadCachedContext_0()) != null) {
        var closure$query_0 = closure$query;
        var this$BingTranslationProvider_0 = this$BingTranslationProvider;
        var closure$translateWithNewToken_0 = closure$translateWithNewToken;
        tmp$_0 = this$BingTranslationProvider_0.translateWithContext_0(tmp$, closure$query_0, false).then(resolve).catch(BingTranslationProvider$translate$lambda$lambda$lambda(closure$translateWithNewToken_0, resolve));
      }
       else
        tmp$_0 = null;
      if (tmp$_0 == null) {
        closure$translateWithNewToken(resolve);
      }
      return Unit;
    };
  }
  BingTranslationProvider.prototype.translate = function (query) {
    var translateWithNewToken = BingTranslationProvider$translate$lambda(this, query);
    return new Promise(BingTranslationProvider$translate$lambda_0(this, query, translateWithNewToken));
  };
  BingTranslationProvider.prototype.loadCachedContext_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = localStorage[this.domainStorageKey_0];
    if (tmp$ == null) {
      return null;
    }
    var domain = tmp$;
    tmp$_0 = localStorage[this.tokenStorageKey_0];
    if (tmp$_0 == null) {
      return null;
    }
    var token = tmp$_0;
    console.info('Translated using cached BingContext: ' + domain + ', ' + token);
    return new BingContext(domain, token);
  };
  BingTranslationProvider.prototype.saveContextToCache_0 = function (context) {
    localStorage[this.domainStorageKey_0] = context.domain;
    localStorage[this.tokenStorageKey_0] = context.token;
  };
  function BingTranslationProvider$translateWithContext$lambda(this$BingTranslationProvider) {
    return function (it) {
      return this$BingTranslationProvider.parseQuickTranslation_0(it);
    };
  }
  function BingTranslationProvider$translateWithContext$lambda_0(this$BingTranslationProvider) {
    return function (it) {
      return this$BingTranslationProvider.parseDetailTranslation_0(it);
    };
  }
  function BingTranslationProvider$translateWithContext$lambda$lambda(closure$sourceUrl, closure$query, closure$context, this$BingTranslationProvider, closure$resolve) {
    return function (it) {
      var t = new BingTranslation(closure$sourceUrl, bingLangCode(getFrom(closure$query)), bingLangCode(getTo(closure$query)), getText(closure$query), this$BingTranslationProvider.voiceUrl_0(closure$context, getText(closure$query), bingLangCode(getFrom(closure$query))), it.first, this$BingTranslationProvider.voiceUrl_0(closure$context, it.first, bingLangCode(getTo(closure$query))), it.second);
      closure$resolve(this$BingTranslationProvider.renderer_0.render_lyhhi4$(t));
      return Unit;
    };
  }
  function BingTranslationProvider$translateWithContext$lambda$lambda_0(closure$renderFailureMessage, closure$resolve, this$BingTranslationProvider, closure$context, closure$query, closure$reject) {
    return function (it) {
      if (closure$renderFailureMessage) {
        closure$resolve(renderFailure(this$BingTranslationProvider.id(), this$BingTranslationProvider.sourceUrl_0(closure$context, closure$query), closure$query, it));
      }
       else {
        closure$reject(it);
      }
      return Unit;
    };
  }
  var Promise$Companion = Promise;
  var Pair_init = Kotlin.kotlin.Pair;
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
  function BingTranslationProvider$translateWithContext$lambda_1(closure$quickTranslation, closure$detailTranslation, closure$sourceUrl, closure$query, closure$context, this$BingTranslationProvider, closure$renderFailureMessage) {
    return function (resolve, reject) {
      (new Promise$Companion(allPromises$lambda(closure$quickTranslation, closure$detailTranslation))).then(BingTranslationProvider$translateWithContext$lambda$lambda(closure$sourceUrl, closure$query, closure$context, this$BingTranslationProvider, resolve)).catch(BingTranslationProvider$translateWithContext$lambda$lambda_0(closure$renderFailureMessage, resolve, this$BingTranslationProvider, closure$context, closure$query, reject));
      return Unit;
    };
  }
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
  BingTranslationProvider.prototype.translateWithContext_0 = function (context, query, renderFailureMessage) {
    var quickTranslation = new Promise$Companion(convert$lambda(this.getQuickTranslation_0(context, query), BingTranslationProvider$translateWithContext$lambda(this)));
    var detailTranslation = new Promise$Companion(convert$lambda(this.getDetailTranslation_0(context, query), BingTranslationProvider$translateWithContext$lambda_0(this)));
    var sourceUrl = this.sourceUrl_0(context, query);
    return new Promise(BingTranslationProvider$translateWithContext$lambda_1(quickTranslation, detailTranslation, sourceUrl, query, context, this, renderFailureMessage));
  };
  BingTranslationProvider.prototype.sourceUrl_0 = function (context, q) {
    return 'https://' + context.domain + '/translate/?from=' + bingLangCode(getFrom(q)) + '&to=' + bingLangCode(getTo(q)) + '&text=' + getText(q);
  };
  BingTranslationProvider.prototype.voiceUrl_0 = function (context, text, lang) {
    return 'https://' + context.domain + '/tspeak?&format=audio%2Fmp3&language=' + bingLangCode(lang) + '&IG=' + context.token + '&IID=translator.5038.1&options=female&text=' + encodeURIComponent(text);
  };
  BingTranslationProvider.prototype.getQuickTranslation_0 = function (context, query) {
    return this.httpClient_0.post_bokjk9$('https://' + context.domain + '/ttranslatev3?isVertical=1&IG=' + context.token + '&IID=translator.5038.1', mapOf(to('Content-Type', 'application/x-www-form-urlencoded')), this.buildQueryData_0(getFrom(query), getTo(query), getText(query)));
  };
  BingTranslationProvider.prototype.getDetailTranslation_0 = function (context, query) {
    return this.httpClient_0.post_bokjk9$('https://' + context.domain + '/tlookupv3?isVertical=1&IG=' + context.token + '&IID=translator.5038.1', mapOf(to('Content-Type', 'application/x-www-form-urlencoded')), this.buildFormData_0(getFrom(query), getTo(query), getText(query)));
  };
  BingTranslationProvider.prototype.parseQuickTranslation_0 = function (result) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var tmp$_5;
    if ((tmp$_0 = (tmp$ = getOrNull(JSON.parse(result), 0)) != null ? tmp$['translations'] : null) != null) {
      var tmp$_6;
      tmp$_5 = Kotlin.isArray(tmp$_6 = tmp$_0) ? tmp$_6 : null;
    }
     else
      tmp$_5 = null;
    tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = tmp$_5) != null ? getOrNull(tmp$_1, 0) : null) != null ? tmp$_2['text'] : null) != null ? tmp$_3.toString() : null;
    if (tmp$_4 == null) {
      throw new TranslationNotFoundException();
    }
    return tmp$_4;
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  BingTranslationProvider.prototype.parseDetailTranslation_0 = function (result) {
    var tmp$, tmp$_0, tmp$_1;
    try {
      tmp$_1 = Kotlin.isArray(tmp$_0 = (tmp$ = getOrNull(JSON.parse(result), 0)) != null ? tmp$['translations'] : null) ? tmp$_0 : null;
      if (tmp$_1 == null) {
        return emptyList();
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return emptyList();
      }
       else
        throw e;
    }
    var translations = tmp$_1;
    var destination = LinkedHashMap_init();
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== translations.length; ++tmp$_2) {
      var element = translations[tmp$_2];
      var key = element['posTag'];
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var $receiver = destination.entries;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_3;
    tmp$_3 = $receiver.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      var tmp$_4 = destination_0.add_11rb$;
      var tmp$_5;
      var poc = typeof (tmp$_5 = item.key) === 'string' ? tmp$_5 : throwCCE();
      var $receiver_0 = item.value;
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_6;
      tmp$_6 = $receiver_0.iterator();
      while (tmp$_6.hasNext()) {
        var item_0 = tmp$_6.next();
        var tmp$_7 = destination_1.add_11rb$;
        var tmp$_8, tmp$_9, tmp$_10, tmp$_11;
        var meaning = typeof (tmp$_8 = item_0['normalizedTarget']) === 'string' ? tmp$_8 : throwCCE();
        var tmp$_12;
        if ((tmp$_9 = item_0['backTranslations']) != null) {
          var tmp$_13;
          tmp$_12 = Kotlin.isArray(tmp$_13 = tmp$_9) ? tmp$_13 : null;
        }
         else
          tmp$_12 = null;
        var tmp$_14;
        if ((tmp$_10 = tmp$_12) != null) {
          var destination_2 = ArrayList_init(tmp$_10.length);
          var tmp$_15;
          for (tmp$_15 = 0; tmp$_15 !== tmp$_10.length; ++tmp$_15) {
            var item_1 = tmp$_10[tmp$_15];
            var tmp$_16;
            destination_2.add_11rb$(typeof (tmp$_16 = item_1['normalizedText']) === 'string' ? tmp$_16 : throwCCE());
          }
          tmp$_14 = destination_2;
        }
         else
          tmp$_14 = null;
        var examples = (tmp$_11 = tmp$_14) != null ? tmp$_11 : emptyList();
        tmp$_7.call(destination_1, new Meaning(meaning, examples));
      }
      var meanings = destination_1;
      tmp$_4.call(destination_0, new Detail(poc, meanings));
    }
    return destination_0;
  };
  BingTranslationProvider.prototype.buildQueryData_0 = function (from, to, query) {
    return 'fromLang=' + bingLangCode(from) + '&to=' + bingLangCode(to) + '&text=' + encodeURIComponent(query);
  };
  BingTranslationProvider.prototype.buildFormData_0 = function (from, to, query) {
    return 'from=' + bingLangCode(from) + '&to=' + bingLangCode(to) + '&text=' + encodeURIComponent(query);
  };
  BingTranslationProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingTranslationProvider',
    interfaces: [TranslationProvider]
  };
  var langCodeMap;
  function bingLangCode(langCode) {
    var tmp$, tmp$_0;
    return (tmp$_0 = typeof (tmp$ = langCodeMap[langCode]) === 'string' ? tmp$ : null) != null ? tmp$_0 : langCode;
  }
  function BingTranslationRenderer() {
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.from + ']');
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.query);
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda(closure$t) {
    return function ($receiver) {
      em($receiver, 'translation-lang', BingTranslationRenderer$render$lambda$lambda$lambda(closure$t));
      strong($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda_0(closure$t));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.to + ']');
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda_0($receiver) {
    set_role($receiver, 'button');
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'collapse';
    $receiver_0.put_xwzc9p$(key, value);
    $receiver.unaryPlus_pdl1vz$('\uD83D\uDCDA');
    return Unit;
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$detail.poc);
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      i($receiver, 'translation-poc', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$meaning.meaning + ': ');
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$meaning) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$meaning.examples, ', '));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning) {
    return function ($receiver) {
      span($receiver, 'translation-primary', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning));
      span($receiver, 'translation-secondary', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$meaning));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$detail) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$detail.meanings.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li($receiver, 'list-group-item small', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      div_0($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail));
      ul($receiver, 'list-group', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$detail));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$detailId, closure$t) {
    return function ($receiver) {
      set_id($receiver, closure$detailId);
      var tmp$;
      tmp$ = closure$t.details.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div_0($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      em($receiver, 'translation-lang', BingTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t));
      $receiver.unaryPlus_pdl1vz$(closure$t.translation);
      if (!closure$t.details.isEmpty()) {
        var detailId = 'googleTranslationDetail' + Random.Default.nextInt();
        a($receiver, '#' + detailId, void 0, 'btn btn-light btn-sm mb-2', BingTranslationRenderer$render$lambda$lambda$lambda$lambda_0);
        div_0($receiver, 'collapse', BingTranslationRenderer$render$lambda$lambda$lambda$lambda_1(detailId, closure$t));
      }
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      li($receiver, 'list-group-item', BingTranslationRenderer$render$lambda$lambda$lambda_1(closure$t));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda(closure$t) {
    return function ($receiver) {
      div_0($receiver, 'alert alert-info', BingTranslationRenderer$render$lambda$lambda(closure$t));
      ul($receiver, 'list-group', BingTranslationRenderer$render$lambda$lambda_0(closure$t));
      return Unit;
    };
  }
  BingTranslationRenderer.prototype.render_lyhhi4$ = function (t) {
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    div(container, 't-result', BingTranslationRenderer$render$lambda(t));
    renderSource(container, t.sourceUrl, builtinSourceIcon(ID));
    return stringBuilder.toString();
  };
  BingTranslationRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingTranslationRenderer',
    interfaces: []
  };
  function BingContext(domain, token) {
    this.domain = domain;
    this.token = token;
  }
  BingContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingContext',
    interfaces: []
  };
  BingContext.prototype.component1 = function () {
    return this.domain;
  };
  BingContext.prototype.component2 = function () {
    return this.token;
  };
  BingContext.prototype.copy_puj7f4$ = function (domain, token) {
    return new BingContext(domain === void 0 ? this.domain : domain, token === void 0 ? this.token : token);
  };
  BingContext.prototype.toString = function () {
    return 'BingContext(domain=' + Kotlin.toString(this.domain) + (', token=' + Kotlin.toString(this.token)) + ')';
  };
  BingContext.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.domain) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  BingContext.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.domain, other.domain) && Kotlin.equals(this.token, other.token)))));
  };
  var DEFAULT_URL;
  var iggRegex;
  function getBingContext$lambda$lambda(closure$xhr, closure$resolve, closure$reject) {
    return function (f) {
      var tmp$, tmp$_0, tmp$_1;
      var url = new URL(closure$xhr.responseURL);
      var htmlContent = closure$xhr.responseText;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = iggRegex.find_905azu$(htmlContent)) != null ? tmp$.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null) {
        closure$resolve(new BingContext(url.hostname, tmp$_1));
        tmp$_2 = Unit;
      }
       else
        tmp$_2 = null;
      if (tmp$_2 == null) {
        closure$reject(IllegalStateException_init('No IG found in html content'));
      }
      return Unit;
    };
  }
  function getBingContext$lambda$lambda_0(closure$reject) {
    return function (event) {
      closure$reject(IllegalStateException_init('Failed to fetch url, error event: ' + event));
      return Unit;
    };
  }
  function getBingContext$lambda(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', getBingContext$lambda$lambda(xhr, resolve, reject));
    xhr.addEventListener('error', getBingContext$lambda$lambda_0(reject));
    xhr.open('GET', DEFAULT_URL);
    xhr.send();
    return Unit;
  }
  function getBingContext() {
    return new Promise(getBingContext$lambda);
  }
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
  _.create_plugin_com_bing_translator = create_plugin_com_bing_translator;
  var package$com_bing_translator = package$plugin.com_bing_translator || (package$plugin.com_bing_translator = {});
  package$com_bing_translator.BingTranslation = BingTranslation;
  package$com_bing_translator.Detail = Detail;
  package$com_bing_translator.Meaning = Meaning;
  Object.defineProperty(package$com_bing_translator, 'ID', {
    get: function () {
      return ID;
    }
  });
  $$importsForInline$$['plugin-com-bing-translator'] = _;
  package$com_bing_translator.BingTranslationProvider = BingTranslationProvider;
  package$com_bing_translator.BingTranslationRenderer = BingTranslationRenderer;
  package$com_bing_translator.BingContext = BingContext;
  package$com_bing_translator.getBingContext = getBingContext;
  BingTranslationProvider.prototype.updateOptions = TranslationProvider.prototype.updateOptions;
  ID = 'plugin-com-bing-translator';
  langCodeMap = json([to('af', 'af'), to('ar', 'ar'), to('bg', 'bg'), to('bn', 'bn-BD'), to('bs', 'bs-Latn'), to('ca', 'ca'), to('cs', 'cs'), to('cy', 'cy'), to('da', 'da'), to('de', 'de'), to('el', 'el'), to('en', 'en'), to('es', 'es'), to('et', 'et'), to('fa', 'fa'), to('fi', 'fi'), to('fj', 'fj'), to('fr', 'fr'), to('he', 'he'), to('hi', 'hi'), to('hr', 'hr'), to('ht', 'ht'), to('hu', 'hu'), to('id', 'id'), to('is', 'is'), to('it', 'it'), to('ja', 'ja'), to('ko', 'ko'), to('lt', 'lt'), to('lv', 'lv'), to('mg', 'mg'), to('ms', 'ms'), to('mt', 'mt'), to('nl', 'nl'), to('no', 'no'), to('pl', 'pl'), to('pt', 'pt'), to('ro', 'ro'), to('ru', 'ru'), to('sk', 'sk'), to('sl', 'sl'), to('sm', 'sm'), to('sr', 'sr-Latn'), to('sv', 'sv'), to('sw', 'sw'), to('ta', 'ta'), to('te', 'te'), to('th', 'th'), to('tl', 'fil'), to('to', 'to'), to('tr', 'tr'), to('ty', 'ty'), to('uk', 'uk'), to('ur', 'ur'), to('vi', 'vi'), to('zh-CN', 'zh-Hans'), to('zh-TW', 'zh-Hant')]);
  DEFAULT_URL = 'https://www.bing.com/translator';
  iggRegex = Regex_init('IG:"([\\w\\d]+)"');
  Kotlin.defineModule('plugin-com-bing-translator', _);
  return _;
}(typeof this['plugin-com-bing-translator'] === 'undefined' ? {} : this['plugin-com-bing-translator'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=plugin-com-bing-translator.js.map
