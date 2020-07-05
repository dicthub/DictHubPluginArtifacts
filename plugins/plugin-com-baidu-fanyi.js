if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'plugin-com-baidu-fanyi'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'plugin-com-baidu-fanyi'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'plugin-com-baidu-fanyi'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'plugin-com-baidu-fanyi'.");
}this['plugin-com-baidu-fanyi'] = function (_, Kotlin, $module$kotlinx_html_js) {
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
  var toString = Kotlin.toString;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_94plub$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlinx_html_js.kotlinx.html.IMG;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var A_init = $module$kotlinx_html_js.kotlinx.html.A;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var SMALL_init = $module$kotlinx_html_js.kotlinx.html.SMALL;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var P_init = $module$kotlinx_html_js.kotlinx.html.P;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Promise_init = Promise;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var EM_init = $module$kotlinx_html_js.kotlinx.html.EM;
  var AUDIO_init = $module$kotlinx_html_js.kotlinx.html.AUDIO;
  var STRONG_init = $module$kotlinx_html_js.kotlinx.html.STRONG;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var I_init = $module$kotlinx_html_js.kotlinx.html.I;
  var LI_init = $module$kotlinx_html_js.kotlinx.html.LI;
  var UL_init = $module$kotlinx_html_js.kotlinx.html.UL;
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
      } else {
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
      } else {
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
    }return AjaxHttpClient_instance;
  }
  var andThen = defineInlineFunction('plugin-com-baidu-fanyi.org.dicthub.plugin.shared.util.andThen_g414bn$', wrapFunction(function () {
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
  var convert = defineInlineFunction('plugin-com-baidu-fanyi.org.dicthub.plugin.shared.util.convert_wus875$', wrapFunction(function () {
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
  var allPromises = defineInlineFunction('plugin-com-baidu-fanyi.org.dicthub.plugin.shared.util.allPromises_m47hm4$', wrapFunction(function () {
    var Promise$Companion = Promise;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var Pair_init = Kotlin.kotlin.Pair;
    var Unit = Kotlin.kotlin.Unit;
    var Promise_init = Promise;
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
      return new Promise_init(allPromises$lambda(pA, pB));
    };
  }));
  var allPromises_0 = defineInlineFunction('plugin-com-baidu-fanyi.org.dicthub.plugin.shared.util.allPromises_t4ctt0$', wrapFunction(function () {
    var Promise$Companion = Promise;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var Triple_init = Kotlin.kotlin.Triple;
    var Unit = Kotlin.kotlin.Unit;
    var Promise_init = Promise;
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
      return new Promise_init(allPromises$lambda(pA, pB, pC));
    };
  }));
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function img$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function a$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function small$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function p$lambda($receiver) {
    return Unit;
  }
  function builtinSourceIcon(id) {
    return 'img/plugin/' + id + '.png';
  }
  function renderSource$lambda$lambda$lambda(closure$icon) {
    return function ($receiver) {
      $receiver.target = '_blank';
      visitTag(new IMG_init(attributesMapOf(['alt', null, 'src', closure$icon, 'class', null]), $receiver.consumer), visit$lambda(img$lambda));
      return Unit;
    };
  }
  function renderSource$lambda$lambda(closure$sourceUrl, closure$icon) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Powered by ');
      var href = closure$sourceUrl;
      var block = renderSource$lambda$lambda$lambda(closure$icon);
      visitTag(new A_init(attributesMapOf(['href', href, 'target', null, 'class', null]), $receiver.consumer), visit$lambda_0(block));
      return Unit;
    };
  }
  function renderSource$lambda(closure$sourceUrl, closure$icon) {
    return function ($receiver) {
      var block = renderSource$lambda$lambda(closure$sourceUrl, closure$icon);
      visitTag(new SMALL_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_1(block));
      return Unit;
    };
  }
  function renderSource(container, sourceUrl, icon) {
    visitTagAndFinalize(new DIV_init(attributesMapOf_0('class', 'translation-source'), container), container, visitAndFinalize$lambda(renderSource$lambda(sourceUrl, icon)));
  }
  function renderBugReport$lambda$lambda$lambda$lambda($receiver) {
    $receiver.src = 'img/icon-bug.16.png';
    return Unit;
  }
  function renderBugReport$lambda$lambda$lambda($receiver) {
    $receiver.target = '_blank';
    visitTag(new IMG_init(attributesMapOf(['alt', null, 'src', null, 'class', null]), $receiver.consumer), visit$lambda(renderBugReport$lambda$lambda$lambda$lambda));
    return Unit;
  }
  function renderBugReport$lambda$lambda(closure$bugUrl) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Report issue: ');
      visitTag(new A_init(attributesMapOf(['href', closure$bugUrl, 'target', null, 'class', null]), $receiver.consumer), visit$lambda_0(renderBugReport$lambda$lambda$lambda));
      return Unit;
    };
  }
  function renderBugReport$lambda(closure$bugUrl) {
    return function ($receiver) {
      var block = renderBugReport$lambda$lambda(closure$bugUrl);
      visitTag(new SMALL_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_1(block));
      return Unit;
    };
  }
  function renderBugReport(container, id, query, exception) {
    var bugTitle = id + ' - [' + getText(query) + ']/' + getFrom(query) + '/' + getTo(query);
    var bugContent = 'message: ' + toString(exception.message) + ', cause: ```' + toString(exception.cause) + '```';
    var bugUrl = 'https://github.com/dicthub/DictHubExtension/issues/new?title=' + bugTitle + '&body=' + bugContent;
    visitTagAndFinalize(new DIV_init(attributesMapOf_0('class', 'translation-report-bug'), container), container, visitAndFinalize$lambda(renderBugReport$lambda(bugUrl)));
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
    if (Kotlin.isType(failure, TranslationNotFoundException)) {
      visitTagAndFinalize(new P_init(attributesMapOf_0('class', 'translation-failure alert alert-warning'), container), container, visitAndFinalize$lambda_0(renderFailure$lambda(query)));
    } else if (Kotlin.isType(failure, TranslationParsingFailureException)) {
      visitTagAndFinalize(new P_init(attributesMapOf_0('class', 'translation-failure alert alert-danger'), container), container, visitAndFinalize$lambda_0(renderFailure$lambda_0(query)));
    } else {
      visitTagAndFinalize(new P_init(attributesMapOf_0('class', 'translation-failure alert alert-warning'), container), container, visitAndFinalize$lambda_0(renderFailure$lambda_1(failure)));
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
    }if (default_0 != null) {
      $receiver['default'] = default_0;
    }return $receiver;
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
  function create_plugin_com_baidu_fanyi() {
    return new BaiduTranslationProvider(AjaxHttpClient_getInstance(), new BaiduTranslationRenderer());
  }
  function BaiduTranslation(from, to, query, translation, pron, details) {
    if (pron === void 0)
      pron = null;
    this.from = from;
    this.to = to;
    this.query = query;
    this.translation = translation;
    this.pron = pron;
    this.details = details;
  }
  BaiduTranslation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaiduTranslation',
    interfaces: []
  };
  BaiduTranslation.prototype.component1 = function () {
    return this.from;
  };
  BaiduTranslation.prototype.component2 = function () {
    return this.to;
  };
  BaiduTranslation.prototype.component3 = function () {
    return this.query;
  };
  BaiduTranslation.prototype.component4 = function () {
    return this.translation;
  };
  BaiduTranslation.prototype.component5 = function () {
    return this.pron;
  };
  BaiduTranslation.prototype.component6 = function () {
    return this.details;
  };
  BaiduTranslation.prototype.copy_qtgw6a$ = function (from, to, query, translation, pron, details) {
    return new BaiduTranslation(from === void 0 ? this.from : from, to === void 0 ? this.to : to, query === void 0 ? this.query : query, translation === void 0 ? this.translation : translation, pron === void 0 ? this.pron : pron, details === void 0 ? this.details : details);
  };
  BaiduTranslation.prototype.toString = function () {
    return 'BaiduTranslation(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', query=' + Kotlin.toString(this.query)) + (', translation=' + Kotlin.toString(this.translation)) + (', pron=' + Kotlin.toString(this.pron)) + (', details=' + Kotlin.toString(this.details)) + ')';
  };
  BaiduTranslation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.translation) | 0;
    result = result * 31 + Kotlin.hashCode(this.pron) | 0;
    result = result * 31 + Kotlin.hashCode(this.details) | 0;
    return result;
  };
  BaiduTranslation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.query, other.query) && Kotlin.equals(this.translation, other.translation) && Kotlin.equals(this.pron, other.pron) && Kotlin.equals(this.details, other.details)))));
  };
  function TranslationDetails(poc, meanings) {
    this.poc = poc;
    this.meanings = meanings;
  }
  TranslationDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationDetails',
    interfaces: []
  };
  TranslationDetails.prototype.component1 = function () {
    return this.poc;
  };
  TranslationDetails.prototype.component2 = function () {
    return this.meanings;
  };
  TranslationDetails.prototype.copy_kwv3np$ = function (poc, meanings) {
    return new TranslationDetails(poc === void 0 ? this.poc : poc, meanings === void 0 ? this.meanings : meanings);
  };
  TranslationDetails.prototype.toString = function () {
    return 'TranslationDetails(poc=' + Kotlin.toString(this.poc) + (', meanings=' + Kotlin.toString(this.meanings)) + ')';
  };
  TranslationDetails.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.poc) | 0;
    result = result * 31 + Kotlin.hashCode(this.meanings) | 0;
    return result;
  };
  TranslationDetails.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.poc, other.poc) && Kotlin.equals(this.meanings, other.meanings)))));
  };
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
  var ID;
  var BASE_URL;
  function BaiduTranslationProvider(httpClient, renderer) {
    this.httpClient_0 = httpClient;
    this.renderer_0 = renderer;
    this.tokenStorageKey_0 = 'plugin-baidu-token';
  }
  BaiduTranslationProvider.prototype.id = function () {
    return ID;
  };
  BaiduTranslationProvider.prototype.meta = function () {
    return createMeta('Baidu Multi-language Translation', 'Support up to 28 language translation', 'Baidu Fanyi', 'https://fanyi.baidu.com/', 'DictHub', 'https://github.com/willings/DictHub');
  };
  BaiduTranslationProvider.prototype.canTranslate = function (query) {
    return typeof langCodeMap[getFrom(query)] === 'string' && typeof langCodeMap[getTo(query)] === 'string' && !equals(getFrom(query), getTo(query));
  };
  function BaiduTranslationProvider$translate$lambda$lambda(this$BaiduTranslationProvider, closure$query, closure$resolve) {
    return function (newToken) {
      this$BaiduTranslationProvider.saveToken_0(newToken);
      console.info('Translate and saved new token: ' + newToken);
      return this$BaiduTranslationProvider.translaeWithToken_0(newToken, closure$query, true).then(closure$resolve);
    };
  }
  function BaiduTranslationProvider$translate$lambda(this$BaiduTranslationProvider, closure$query) {
    return function (resolve) {
      newTokenPromise().then(BaiduTranslationProvider$translate$lambda$lambda(this$BaiduTranslationProvider, closure$query, resolve));
    };
  }
  function BaiduTranslationProvider$translate$lambda$lambda$lambda(closure$translateWithNewToken, closure$resolve) {
    return function (it) {
      closure$translateWithNewToken(closure$resolve);
      return Unit;
    };
  }
  function BaiduTranslationProvider$translate$lambda_0(this$BaiduTranslationProvider, closure$query, closure$translateWithNewToken) {
    return function (resolve, f) {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this$BaiduTranslationProvider.loadCachedToken_0()) != null) {
        var closure$query_0 = closure$query;
        var this$BaiduTranslationProvider_0 = this$BaiduTranslationProvider;
        var closure$translateWithNewToken_0 = closure$translateWithNewToken;
        console.info('Translate using cached baidu token: ' + tmp$);
        tmp$_0 = this$BaiduTranslationProvider_0.translaeWithToken_0(tmp$, closure$query_0, false).then(resolve).catch(BaiduTranslationProvider$translate$lambda$lambda$lambda(closure$translateWithNewToken_0, resolve));
      } else
        tmp$_0 = null;
      if (tmp$_0 == null) {
        closure$translateWithNewToken(resolve);
      }return Unit;
    };
  }
  BaiduTranslationProvider.prototype.translate = function (query) {
    var translateWithNewToken = BaiduTranslationProvider$translate$lambda(this, query);
    return new Promise(BaiduTranslationProvider$translate$lambda_0(this, query, translateWithNewToken));
  };
  BaiduTranslationProvider.prototype.loadCachedToken_0 = function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = localStorage[this.tokenStorageKey_0]) != null) {
      var regex = '(.*):(.*)';
      tmp$_1 = tmp$.match(regex);
    } else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? new Token(tmp$_0[1], tmp$_0[2]) : null;
  };
  BaiduTranslationProvider.prototype.saveToken_0 = function (token) {
    localStorage[this.tokenStorageKey_0] = token.token + ':' + token.gtk;
  };
  function BaiduTranslationProvider$translaeWithToken$lambda$lambda(this$BaiduTranslationProvider) {
    return function (it) {
      return this$BaiduTranslationProvider.parseTranslationData_0(it);
    };
  }
  function BaiduTranslationProvider$translaeWithToken$lambda$lambda_0(closure$resolve, this$BaiduTranslationProvider) {
    return function (it) {
      closure$resolve(this$BaiduTranslationProvider.renderer_0.render_4zxeg5$(it));
      return Unit;
    };
  }
  function BaiduTranslationProvider$translaeWithToken$lambda$lambda_1(closure$renderError, closure$resolve, this$BaiduTranslationProvider, closure$query, closure$reject) {
    return function (it) {
      if (closure$renderError) {
        closure$resolve(renderFailure(this$BaiduTranslationProvider.id(), sourceUrl(closure$query), closure$query, it));
      } else {
        closure$reject(it);
      }
      return Unit;
    };
  }
  function BaiduTranslationProvider$translaeWithToken$lambda(closure$query, closure$token, this$BaiduTranslationProvider, closure$renderError) {
    return function (resolve, reject) {
      (new Promise_init(convert$lambda(this$BaiduTranslationProvider.callBaiduApi_0(closure$query, closure$token), BaiduTranslationProvider$translaeWithToken$lambda$lambda(this$BaiduTranslationProvider)))).then(BaiduTranslationProvider$translaeWithToken$lambda$lambda_0(resolve, this$BaiduTranslationProvider)).catch(BaiduTranslationProvider$translaeWithToken$lambda$lambda_1(closure$renderError, resolve, this$BaiduTranslationProvider, closure$query, reject));
      return Unit;
    };
  }
  BaiduTranslationProvider.prototype.translaeWithToken_0 = function (token, query, renderError) {
    return new Promise(BaiduTranslationProvider$translaeWithToken$lambda(query, token, this, renderError));
  };
  BaiduTranslationProvider.prototype.parseTranslationData_0 = function (jsonStr) {
    return this.parseTranslationResult_0(JSON.parse(jsonStr));
  };
  BaiduTranslationProvider.prototype.parseTranslationResult_0 = function (data) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    var tmp$_16;
    tmp$ = (tmp$_16 = data['trans_result']) == null || Kotlin.isType(tmp$_16, Any) ? tmp$_16 : null;
    if (tmp$ == null) {
      throw new TranslationNotFoundException();
    }var translationResult = tmp$;
    var tmp$_17;
    tmp$_0 = (tmp$_17 = translationResult['from']) == null || Kotlin.isType(tmp$_17, Any) ? tmp$_17 : null;
    if (tmp$_0 == null) {
      throw new TranslationParsingFailureException();
    }var from = tmp$_0;
    var tmp$_18;
    tmp$_1 = (tmp$_18 = translationResult['to']) == null || Kotlin.isType(tmp$_18, Any) ? tmp$_18 : null;
    if (tmp$_1 == null) {
      throw new TranslationParsingFailureException();
    }var to = tmp$_1;
    var tmp$_19;
    tmp$_3 = (tmp$_2 = (tmp$_19 = translationResult['data']) == null || Kotlin.isType(tmp$_19, Any) ? tmp$_19 : null) != null ? firstOrNull(tmp$_2) : null;
    if (tmp$_3 == null) {
      throw new TranslationNotFoundException();
    }var translation = tmp$_3;
    var tmp$_20;
    var tmp$_21;
    if ((tmp$_4 = (tmp$_21 = data['dict_result']) == null || Kotlin.isType(tmp$_21, Any) ? tmp$_21 : null) != null) {
      var tmp$_22;
      tmp$_20 = (tmp$_22 = tmp$_4['simple_means']) == null || Kotlin.isType(tmp$_22, Any) ? tmp$_22 : null;
    } else
      tmp$_20 = null;
    var tmp$_23;
    if ((tmp$_5 = tmp$_20) != null) {
      var tmp$_24;
      tmp$_23 = (tmp$_24 = tmp$_5['symbols']) == null || Kotlin.isType(tmp$_24, Any) ? tmp$_24 : null;
    } else
      tmp$_23 = null;
    var symbol = (tmp$_6 = tmp$_23) != null ? firstOrNull(tmp$_6) : null;
    switch (to) {
      case 'en':
        var tmp$_25;
        if (symbol != null) {
          var tmp$_26;
          tmp$_25 = (tmp$_26 = symbol['ph_am']) == null || Kotlin.isType(tmp$_26, Any) ? tmp$_26 : null;
        } else
          tmp$_25 = null;
        var tmp$_27;
        if ((tmp$_7 = tmp$_25) != null)
          tmp$_27 = tmp$_7;
        else {
          var tmp$_28;
          if (symbol != null) {
            var tmp$_29;
            tmp$_28 = (tmp$_29 = symbol['ph_en']) == null || Kotlin.isType(tmp$_29, Any) ? tmp$_29 : null;
          } else
            tmp$_28 = null;
          tmp$_27 = tmp$_28;
        }

        tmp$_8 = tmp$_27;
        break;
      case 'zh':
        var tmp$_30;
        if (symbol != null) {
          var tmp$_31;
          tmp$_30 = (tmp$_31 = symbol['word_symbol']) == null || Kotlin.isType(tmp$_31, Any) ? tmp$_31 : null;
        } else
          tmp$_30 = null;
        tmp$_8 = tmp$_30;
        break;
      default:tmp$_8 = null;
        break;
    }
    var pron = tmp$_8;
    if (equals(from, 'zh')) {
      var tmp$_32;
      if (symbol != null) {
        var tmp$_33;
        tmp$_32 = (tmp$_33 = symbol['parts']) == null || Kotlin.isType(tmp$_33, Any) ? tmp$_33 : null;
      } else
        tmp$_32 = null;
      var tmp$_34;
      if ((tmp$_9 = tmp$_32) != null) {
        var destination = ArrayList_init();
        var tmp$_35;
        for (tmp$_35 = 0; tmp$_35 !== tmp$_9.length; ++tmp$_35) {
          var element = tmp$_9[tmp$_35];
          var tmp$_36, tmp$_37;
          var tmp$_38;
          var list = (tmp$_37 = (tmp$_36 = (tmp$_38 = element['means']) == null || Kotlin.isType(tmp$_38, Any) ? tmp$_38 : null) != null ? toList(tmp$_36) : null) != null ? tmp$_37 : emptyList();
          addAll(destination, list);
        }
        tmp$_34 = destination;
      } else
        tmp$_34 = null;
      var tmp$_39;
      if ((tmp$_10 = tmp$_34) != null) {
        var destination_0 = LinkedHashMap_init();
        var tmp$_40;
        tmp$_40 = tmp$_10.iterator();
        while (tmp$_40.hasNext()) {
          var element_0 = tmp$_40.next();
          var tmp$_41;
          var key = typeof (tmp$_41 = element_0['part']) === 'string' ? tmp$_41 : null;
          var tmp$_0_0;
          var value = destination_0.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init();
            destination_0.put_xwzc9p$(key, answer);
            tmp$_0_0 = answer;
          } else {
            tmp$_0_0 = value;
          }
          var list_0 = tmp$_0_0;
          list_0.add_11rb$(element_0);
        }
        tmp$_39 = destination_0;
      } else
        tmp$_39 = null;
      var tmp$_42;
      if ((tmp$_11 = tmp$_39) != null) {
        var destination_1 = ArrayList_init_0(tmp$_11.size);
        var tmp$_43;
        tmp$_43 = tmp$_11.entries.iterator();
        while (tmp$_43.hasNext()) {
          var item = tmp$_43.next();
          var tmp$_44 = destination_1.add_11rb$;
          var tmp$_45, tmp$_46;
          tmp$_46 = (tmp$_45 = item.key) != null ? tmp$_45 : '';
          var $receiver = item.value;
          var destination_2 = ArrayList_init();
          var tmp$_47;
          tmp$_47 = $receiver.iterator();
          while (tmp$_47.hasNext()) {
            var element_1 = tmp$_47.next();
            var tmp$_0_1;
            var tmp$_48;
            if ((tmp$_0_1 = typeof (tmp$_48 = element_1['text']) === 'string' ? tmp$_48 : null) != null) {
              destination_2.add_11rb$(tmp$_0_1);
            }}
          tmp$_44.call(destination_1, new TranslationDetails(tmp$_46, destination_2));
        }
        tmp$_42 = destination_1;
      } else
        tmp$_42 = null;
      tmp$_13 = tmp$_42;
    } else {
      var tmp$_49;
      if (symbol != null) {
        var tmp$_50;
        tmp$_49 = (tmp$_50 = symbol['parts']) == null || Kotlin.isType(tmp$_50, Any) ? tmp$_50 : null;
      } else
        tmp$_49 = null;
      var tmp$_51;
      if ((tmp$_12 = tmp$_49) != null) {
        var destination_3 = ArrayList_init_0(tmp$_12.length);
        var tmp$_52;
        for (tmp$_52 = 0; tmp$_52 !== tmp$_12.length; ++tmp$_52) {
          var item_0 = tmp$_12[tmp$_52];
          var tmp$_53, tmp$_54, tmp$_55;
          var tmp$_56;
          var tmp$_57;
          destination_3.add_11rb$(new TranslationDetails((tmp$_53 = (tmp$_56 = item_0['part']) == null || Kotlin.isType(tmp$_56, Any) ? tmp$_56 : null) != null ? tmp$_53 : '', (tmp$_55 = (tmp$_54 = (tmp$_57 = item_0['means']) == null || Kotlin.isType(tmp$_57, Any) ? tmp$_57 : null) != null ? toList(tmp$_54) : null) != null ? tmp$_55 : emptyList()));
        }
        tmp$_51 = destination_3;
      } else
        tmp$_51 = null;
      tmp$_13 = tmp$_51;
    }
    var details = tmp$_13;
    var tmp$_58;
    tmp$_14 = (tmp$_58 = translation['src']) == null || Kotlin.isType(tmp$_58, Any) ? tmp$_58 : null;
    if (tmp$_14 == null) {
      throw new TranslationParsingFailureException();
    }var tmp$_59;
    tmp$_15 = (tmp$_59 = translation['dst']) == null || Kotlin.isType(tmp$_59, Any) ? tmp$_59 : null;
    if (tmp$_15 == null) {
      throw new TranslationParsingFailureException();
    }return new BaiduTranslation(from, to, tmp$_14, tmp$_15, pron, details != null ? details : emptyList());
  };
  BaiduTranslationProvider.prototype.callBaiduApi_0 = function (query, token) {
    return this.httpClient_0.post_bokjk9$('https://fanyi.baidu.com/v2transapi', mapOf(to('Content-Type', 'application/x-www-form-urlencoded')), this.buildFormData_0(getFrom(query), getTo(query), getText(query), signQuery(getText(query), token.gtk), token.token));
  };
  BaiduTranslationProvider.prototype.buildFormData_0 = function (from, to, query, sign, token) {
    return 'from=' + baiduLangCode(from).toString() + '&to=' + baiduLangCode(to).toString() + '&query=' + query + '&simple_means_flag=3&sign=' + sign + '&token=' + token;
  };
  BaiduTranslationProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaiduTranslationProvider',
    interfaces: [TranslationProvider]
  };
  var langCodeMap;
  function baiduLangCode(langCode) {
    var tmp$;
    return (tmp$ = langCodeMap[langCode]) != null ? tmp$ : langCode;
  }
  function value($receiver, key) {
    var tmp$;
    return (tmp$ = $receiver[key]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : null;
  }
  function sourceUrl(q) {
    return BASE_URL + '/#' + baiduLangCode(getFrom(q)).toString() + '/' + baiduLangCode(getTo(q)).toString() + '/' + getText(q);
  }
  function visit$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function em$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_3(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function audio$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_4(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function strong$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_5(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_6(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function i$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_7(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function li$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_8(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function ul$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_9(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function a$lambda_0($receiver) {
    return Unit;
  }
  function visit$lambda_10(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_0($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_1($receiver) {
    return Unit;
  }
  function BaiduTranslationRenderer() {
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.from + ']');
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.query);
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = closure$t.pron) != null) {
        $receiver.unaryPlus_pdl1vz$('[' + tmp$ + ']');
      }return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t);
      visitTag(new EM_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_2(block));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      $receiver.src = this$BaiduTranslationRenderer.voiceUrl_0(closure$t.from, closure$t.query);
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_2(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$t, this$BaiduTranslationRenderer);
      visitTag(new AUDIO_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_3(block));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      var classes = 'translation-lang';
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda(closure$t);
      visitTag(new EM_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_2(block));
      var block_0 = BaiduTranslationRenderer$render$lambda$lambda$lambda_0(closure$t);
      visitTag(new STRONG_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_4(block_0));
      $receiver.unaryPlus_pdl1vz$(' ');
      var classes_0 = 'translation-pronunciation';
      var block_1 = BaiduTranslationRenderer$render$lambda$lambda$lambda_1(closure$t);
      visitTag(new SPAN_init(attributesMapOf_0('class', classes_0), $receiver.consumer), visit$lambda_5(block_1));
      var classes_1 = 'translation-voice';
      var block_2 = BaiduTranslationRenderer$render$lambda$lambda$lambda_2(closure$t, this$BaiduTranslationRenderer);
      visitTag(new SPAN_init(attributesMapOf_0('class', classes_1), $receiver.consumer), visit$lambda_5(block_2));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.to + ']');
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_2($receiver) {
    set_role($receiver, 'button');
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'collapse';
    $receiver_0.put_xwzc9p$(key, value);
    $receiver.unaryPlus_pdl1vz$('\uD83D\uDCDA');
    return Unit;
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$translationDetail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$translationDetail.poc);
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$translationDetail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$translationDetail.meanings, '; '));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$translationDetail) {
    return function ($receiver) {
      var classes = 'translation-poc';
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$translationDetail);
      visitTag(new I_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_6(block));
      var classes_0 = 'translation-primary';
      var block_0 = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$translationDetail);
      visitTag(new SPAN_init(attributesMapOf_0('class', classes_0), $receiver.consumer), visit$lambda_5(block_0));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$t.details.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        visitTag(new LI_init(attributesMapOf_0('class', 'list-group-item small'), $receiver.consumer), visit$lambda_7(BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element)));
      }
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_3(closure$detailId, closure$t) {
    return function ($receiver) {
      set_id($receiver, closure$detailId);
      var classes = 'list-group';
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$t);
      visitTag(new UL_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_8(block));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_3(closure$t) {
    return function ($receiver) {
      var classes = 'translation-lang';
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t);
      visitTag(new EM_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_2(block));
      $receiver.unaryPlus_pdl1vz$(closure$t.translation);
      if (!closure$t.details.isEmpty()) {
        var detailId = 'baiduDetail';
        visitTag(new A_init(attributesMapOf(['href', '#baiduDetail', 'target', null, 'class', 'btn btn-light btn-sm mb-2']), $receiver.consumer), visit$lambda_9(BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_2));
        var classes_0 = 'collapse';
        var block_0 = BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_3(detailId, closure$t);
        visitTag(new DIV_init(attributesMapOf_0('class', classes_0), $receiver.consumer), visit$lambda_10(block_0));
      }return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      var classes = 'list-group-item';
      var block = BaiduTranslationRenderer$render$lambda$lambda$lambda_3(closure$t);
      visitTag(new LI_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_7(block));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      var classes = 'alert alert-info';
      var block = BaiduTranslationRenderer$render$lambda$lambda(closure$t, this$BaiduTranslationRenderer);
      visitTag(new DIV_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_10(block));
      var classes_0 = 'list-group';
      var block_0 = BaiduTranslationRenderer$render$lambda$lambda_0(closure$t);
      visitTag(new UL_init(attributesMapOf_0('class', classes_0), $receiver.consumer), visit$lambda_8(block_0));
      return Unit;
    };
  }
  BaiduTranslationRenderer.prototype.render_4zxeg5$ = function (t) {
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    visitTagAndFinalize(new DIV_init(attributesMapOf_0('class', 't-result'), container), container, visitAndFinalize$lambda_1(BaiduTranslationRenderer$render$lambda(t, this)));
    renderSource(container, this.sourceUrl_0(t), builtinSourceIcon(ID));
    return stringBuilder.toString();
  };
  BaiduTranslationRenderer.prototype.sourceUrl_0 = function (t) {
    return BASE_URL + '/#' + t.from + '/' + t.to + '/' + t.query;
  };
  BaiduTranslationRenderer.prototype.voiceUrl_0 = function (lang, text) {
    return BASE_URL + '/gettts?spd=3&source=web&lan=' + lang + '&text=' + text;
  };
  BaiduTranslationRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaiduTranslationRenderer',
    interfaces: []
  };
  var regexToken;
  var regexGtk;
  function Token(token, gtk) {
    this.token = token;
    this.gtk = gtk;
  }
  Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  Token.prototype.component1 = function () {
    return this.token;
  };
  Token.prototype.component2 = function () {
    return this.gtk;
  };
  Token.prototype.copy_puj7f4$ = function (token, gtk) {
    return new Token(token === void 0 ? this.token : token, gtk === void 0 ? this.gtk : gtk);
  };
  Token.prototype.toString = function () {
    return 'Token(token=' + Kotlin.toString(this.token) + (', gtk=' + Kotlin.toString(this.gtk)) + ')';
  };
  Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.gtk) | 0;
    return result;
  };
  Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.token, other.token) && Kotlin.equals(this.gtk, other.gtk)))));
  };
  function newTokenPromise$lambda$lambda(closure$resolve, closure$reject) {
    return function (htmlContent) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var token = (tmp$_0 = (tmp$ = regexToken.find_905azu$(htmlContent)) != null ? tmp$.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null;
      var gtk = (tmp$_2 = (tmp$_1 = regexGtk.find_905azu$(htmlContent)) != null ? tmp$_1.groupValues : null) != null ? tmp$_2.get_za3lpa$(1) : null;
      if (token != null && gtk != null) {
        closure$resolve(new Token(token, gtk));
      } else {
        closure$reject(IllegalStateException_init('Token parse failed'));
      }
      return Unit;
    };
  }
  function newTokenPromise$lambda(resolve, reject) {
    AjaxHttpClient_getInstance().get_61zpoe$('https://fanyi.baidu.com').then(newTokenPromise$lambda$lambda(resolve, reject)).catch(reject);
    return Unit;
  }
  function newTokenPromise() {
    return new Promise(newTokenPromise$lambda);
  }
  var signQuery;
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
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
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
  _.create_plugin_com_baidu_fanyi = create_plugin_com_baidu_fanyi;
  var package$com_baidu_fanyi = package$plugin.com_baidu_fanyi || (package$plugin.com_baidu_fanyi = {});
  package$com_baidu_fanyi.BaiduTranslation = BaiduTranslation;
  package$com_baidu_fanyi.TranslationDetails = TranslationDetails;
  Object.defineProperty(package$com_baidu_fanyi, 'ID', {
    get: function () {
      return ID;
    }
  });
  Object.defineProperty(package$com_baidu_fanyi, 'BASE_URL', {
    get: function () {
      return BASE_URL;
    }
  });
  $$importsForInline$$['plugin-com-baidu-fanyi'] = _;
  package$com_baidu_fanyi.BaiduTranslationProvider = BaiduTranslationProvider;
  package$com_baidu_fanyi.BaiduTranslationRenderer = BaiduTranslationRenderer;
  package$com_baidu_fanyi.Token = Token;
  package$com_baidu_fanyi.newTokenPromise = newTokenPromise;
  Object.defineProperty(package$com_baidu_fanyi, 'signQuery', {
    get: function () {
      return signQuery;
    }
  });
  BaiduTranslationProvider.prototype.updateOptions = TranslationProvider.prototype.updateOptions;
  ID = 'plugin-com-baidu-fanyi';
  BASE_URL = 'https://fanyi.baidu.com';
  langCodeMap = json([to('en', 'en'), to('ar', 'ara'), to('et', 'est'), to('bg', 'bul'), to('pl', 'pl'), to('da', 'dan'), to('de', 'de'), to('ru', 'ru'), to('fr', 'fra'), to('fi', 'fin'), to('ko', 'kor'), to('nl', 'nl'), to('cs', 'cs'), to('ro', 'rom'), to('pt', 'pt'), to('ja', 'jp'), to('sv', 'swe'), to('sk', 'slo'), to('th', 'th'), to('es', 'spa'), to('el', 'el'), to('hu', 'hu'), to('it', 'it'), to('vi', 'vie'), to('zh-CN', 'zh'), to('zh-TW', 'cht')]);
  regexToken = Regex_init("token:\\s?'([a-f\\d]+)'");
  regexGtk = Regex_init("window.gtk = '(\\d+.\\d+)';");
  function a(r, o) {
    for (var t = 0; t < o.length - 2; t += 3) {
      var a = o.charAt(t + 2);
      a = a >= 'a' ? a.charCodeAt(0) - 87 : Number(a), a = '+' === o.charAt(t + 1) ? r >>> a : r << a, r = '+' === o.charAt(t) ? r + a & 4.294967295E9 : r ^ a;
    }
    return r;
  }
  var C = null;
  function baidu_sign(r, _gtk) {
    var o = r.length;
    o > 30 && (r = '' + r.substr(0, 10) + r.substr(Math.floor(o / 2) - 5, 10) + r.substr(-10, 10));
    var t = void 0, t = null !== C ? C : (C = _gtk || '') || '';
    for (var e = t.split('.'), h = Number(e[0]) || 0, i = Number(e[1]) || 0, d = [], f = 0, g = 0; g < r.length; g++) {
      var m = r.charCodeAt(g);
      128 > m ? (d[f++] = m) : (2048 > m ? (d[f++] = m >> 6 | 192) : (55296 === (64512 & m) && g + 1 < r.length && 56320 === (64512 & r.charCodeAt(g + 1)) ? (m = 65536 + ((1023 & m) << 10) + (1023 & r.charCodeAt(++g)), d[f++] = m >> 18 | 240, d[f++] = m >> 12 & 63 | 128) : (d[f++] = m >> 12 | 224), d[f++] = m >> 6 & 63 | 128), d[f++] = 63 & m | 128);
    }
    for (var S = h, u = '+-a^+6', l = '+-3^+b+-f', s = 0; s < d.length; s++)
      S += d[s], S = a(S, u);
    return S = a(S, l), S ^= i, 0 > S && (S = (2147483647 & S) + 2.147483648E9), S %= 1000000.0, S.toString() + '.' + (S ^ h);
  }
  signQuery = baidu_sign;
  Kotlin.defineModule('plugin-com-baidu-fanyi', _);
  return _;
}(typeof this['plugin-com-baidu-fanyi'] === 'undefined' ? {} : this['plugin-com-baidu-fanyi'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=plugin-com-baidu-fanyi.js.map
