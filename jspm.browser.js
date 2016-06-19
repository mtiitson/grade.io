SystemJS.config({
  baseURL: "/",
  trace: "true",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "react-cdn": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react.js",
    "react-dom-cdn": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.min.js",
    "grade.io/": "src/"
  },
  bundles: {
    "build.js": [
      "grade.io/main.jsx",
      "github:capaj/systemjs-hot-reloader@0.5.8/default-listener.js",
      "github:capaj/systemjs-hot-reloader@0.5.8.json",
      "github:capaj/systemjs-hot-reloader@0.5.8/hot-reloader.js",
      "npm:debug@2.2.0/browser.js",
      "npm:debug@2.2.0.json",
      "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
      "github:jspm/nodelibs-process@0.2.0-alpha.json",
      "npm:debug@2.2.0/debug.js",
      "npm:ms@0.7.1/index.js",
      "npm:ms@0.7.1.json",
      "npm:weakee@1.0.0/weakee.js",
      "npm:weakee@1.0.0.json",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/createClass.js",
      "npm:systemjs-plugin-babel@0.0.9.json",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/classCallCheck.js",
      "github:socketio/socket.io-client@1.4.6/socket.io.js",
      "github:socketio/socket.io-client@1.4.6.json",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/inherits.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/possibleConstructorReturn.js",
      "grade.io/styles/styles.scss!github:mobilexag/plugin-sass@0.3.0/index.js",
      "github:mobilexag/plugin-sass@0.3.0.json",
      "github:twbs/bootstrap-sass@3.3.6/assets/javascripts/bootstrap.js",
      "github:twbs/bootstrap-sass@3.3.6.json",
      "github:components/jquery@2.2.1/jquery.js",
      "github:components/jquery@2.2.1.json",
      "grade.io/store/index.js",
      "npm:redux-thunk@2.0.1/lib/index.js",
      "npm:redux-thunk@2.0.1.json",
      "grade.io/reducers/index.js",
      "grade.io/reducers/reducers.js",
      "grade.io/actions/index.js",
      "npm:react-router@2.0.1/lib/index.js",
      "npm:react-router@2.0.1.json",
      "npm:react-router@2.0.1/lib/createMemoryHistory.js",
      "npm:history@2.1.1/lib/createMemoryHistory.js",
      "npm:history@2.1.1.json",
      "npm:history@2.1.1/lib/createHistory.js",
      "npm:history@2.1.1/lib/deprecate.js",
      "npm:warning@2.1.0/browser.js",
      "npm:warning@2.1.0.json",
      "npm:history@2.1.1/lib/runTransitionHook.js",
      "npm:history@2.1.1/lib/createLocation.js",
      "npm:history@2.1.1/lib/PathUtils.js",
      "npm:history@2.1.1/lib/Actions.js",
      "npm:history@2.1.1/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1.json",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:invariant@2.2.1/browser.js",
      "npm:invariant@2.2.1.json",
      "npm:history@2.1.1/lib/useBasename.js",
      "npm:history@2.1.1/lib/ExecutionEnvironment.js",
      "npm:history@2.1.1/lib/useQueries.js",
      "npm:query-string@3.0.3/index.js",
      "npm:query-string@3.0.3.json",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:strict-uri-encode@1.1.0.json",
      "npm:react-router@2.0.1/lib/hashHistory.js",
      "npm:react-router@2.0.1/lib/createRouterHistory.js",
      "npm:react-router@2.0.1/lib/useRouterHistory.js",
      "npm:history@2.1.1/lib/createHashHistory.js",
      "npm:history@2.1.1/lib/createDOMHistory.js",
      "npm:history@2.1.1/lib/DOMUtils.js",
      "npm:history@2.1.1/lib/DOMStateStorage.js",
      "npm:react-router@2.0.1/lib/browserHistory.js",
      "npm:history@2.1.1/lib/createBrowserHistory.js",
      "npm:react-router@2.0.1/lib/PatternUtils.js",
      "npm:react-router@2.0.1/lib/match.js",
      "npm:react-router@2.0.1/lib/RouterUtils.js",
      "npm:react-router@2.0.1/lib/deprecateObjectProperties.js",
      "npm:react-router@2.0.1/lib/routerWarning.js",
      "npm:react-router@2.0.1/lib/RouteUtils.js",
      "npm:react-router@2.0.1/lib/createTransitionManager.js",
      "npm:react-router@2.0.1/lib/matchRoutes.js",
      "npm:react-router@2.0.1/lib/AsyncUtils.js",
      "npm:react-router@2.0.1/lib/getComponents.js",
      "npm:react-router@2.0.1/lib/isActive.js",
      "npm:react-router@2.0.1/lib/TransitionUtils.js",
      "npm:react-router@2.0.1/lib/computeChangedRoutes.js",
      "npm:react-router@2.0.1/lib/PropTypes.js",
      "npm:react-router@2.0.1/lib/RoutingContext.js",
      "npm:react-router@2.0.1/lib/RouterContext.js",
      "npm:react-router@2.0.1/lib/getRouteParams.js",
      "npm:react-router@2.0.1/lib/useRoutes.js",
      "npm:react-router@2.0.1/lib/RouteContext.js",
      "npm:react-router@2.0.1/lib/Lifecycle.js",
      "npm:react-router@2.0.1/lib/History.js",
      "npm:react-router@2.0.1/lib/Route.js",
      "npm:react-router@2.0.1/lib/Redirect.js",
      "npm:react-router@2.0.1/lib/IndexRoute.js",
      "npm:react-router@2.0.1/lib/IndexRedirect.js",
      "npm:react-router@2.0.1/lib/IndexLink.js",
      "npm:react-router@2.0.1/lib/Link.js",
      "npm:react-router@2.0.1/lib/Router.js",
      "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js",
      "npm:isomorphic-fetch@2.2.1.json",
      "npm:whatwg-fetch@0.9.0/fetch.js",
      "npm:whatwg-fetch@0.9.0.json",
      "npm:redux-actions@0.9.1/lib/index.js",
      "npm:redux-actions@0.9.1.json",
      "npm:redux-actions@0.9.1/lib/handleActions.js",
      "npm:reduce-reducers@0.1.2/lib/index.js",
      "npm:reduce-reducers@0.1.2.json",
      "npm:redux-actions@0.9.1/lib/ownKeys.js",
      "npm:redux-actions@0.9.1/lib/handleAction.js",
      "npm:flux-standard-action@0.6.1/lib/index.js",
      "npm:flux-standard-action@0.6.1.json",
      "npm:lodash.isplainobject@3.2.0/index.js",
      "npm:lodash.isplainobject@3.2.0.json",
      "npm:lodash.keysin@3.0.8/index.js",
      "npm:lodash.keysin@3.0.8.json",
      "npm:lodash.isarray@3.0.4/index.js",
      "npm:lodash.isarray@3.0.4.json",
      "npm:lodash.isarguments@3.0.8/index.js",
      "npm:lodash.isarguments@3.0.8.json",
      "npm:lodash._basefor@3.0.3/index.js",
      "npm:lodash._basefor@3.0.3.json",
      "npm:redux-actions@0.9.1/lib/createAction.js",
      "npm:systemjs-plugin-babel@0.0.9/babel-helpers/extends.js",
      "npm:redux@3.3.1/lib/index.js",
      "npm:redux@3.3.1.json",
      "npm:redux@3.3.1/lib/utils/warning.js",
      "npm:redux@3.3.1/lib/compose.js",
      "npm:redux@3.3.1/lib/applyMiddleware.js",
      "npm:redux@3.3.1/lib/bindActionCreators.js",
      "npm:redux@3.3.1/lib/combineReducers.js",
      "npm:lodash@4.12.0/isPlainObject.js",
      "npm:lodash@4.12.0.json",
      "npm:lodash@4.12.0/isObjectLike.js",
      "npm:lodash@4.12.0/_isHostObject.js",
      "npm:lodash@4.12.0/_getPrototype.js",
      "npm:redux@3.3.1/lib/createStore.js",
      "grade.io/containers/root.jsx",
      "grade.io/containers/GradesView.jsx",
      "grade.io/containers/StudentsGradesReport.jsx",
      "npm:react-redux@4.4.1/lib/index.js",
      "npm:react-redux@4.4.1.json",
      "npm:react-redux@4.4.1/lib/components/connect.js",
      "npm:hoist-non-react-statics@1.0.5/index.js",
      "npm:hoist-non-react-statics@1.0.5.json",
      "npm:react-redux@4.4.1/lib/utils/wrapActionCreators.js",
      "npm:react-redux@4.4.1/lib/utils/shallowEqual.js",
      "npm:react-redux@4.4.1/lib/utils/storeShape.js",
      "npm:react-redux@4.4.1/lib/components/Provider.js",
      "grade.io/components/Reports/GradesReport.jsx",
      "npm:jquery@2.2.3/dist/jquery.js",
      "npm:jquery@2.2.3.json",
      "grade.io/containers/StudentPrototypeReport.jsx",
      "grade.io/models/Criterion.js",
      "grade.io/models/Grade.js",
      "grade.io/models/PrototypeWork.js",
      "grade.io/models/Work.js",
      "grade.io/components/Reports/WorkReport.jsx",
      "grade.io/util.js",
      "grade.io/components/SubmitForm/StudentsSelection.jsx",
      "npm:react-bootstrap-typeahead@0.4.0/lib/index.js",
      "npm:react-bootstrap-typeahead@0.4.0.json",
      "npm:react-bootstrap-typeahead@0.4.0/lib/Typeahead.react.js",
      "npm:react-bootstrap-typeahead@0.4.0/css/Typeahead.css",
      "github:systemjs/plugin-css@0.1.21.json",
      "npm:react-onclickoutside@4.9.0/decorator.js",
      "npm:react-onclickoutside@4.9.0.json",
      "npm:react-onclickoutside@4.9.0/index.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:object-assign@4.1.0.json",
      "npm:react-bootstrap-typeahead@0.4.0/lib/keyCode.js",
      "npm:lodash@3.10.1/index.js",
      "npm:lodash@3.10.1.json",
      "npm:react-bootstrap-typeahead@0.4.0/lib/TypeaheadMenu.react.js",
      "npm:classnames@2.2.5/index.js",
      "npm:classnames@2.2.5.json",
      "npm:react-highlighter@0.3.1/lib/highlighter.js",
      "npm:react-highlighter@0.3.1.json",
      "npm:escape-string-regexp@1.0.5/index.js",
      "npm:escape-string-regexp@1.0.5.json",
      "npm:react-highlighter@0.3.1/lib/regExpPropType.js",
      "npm:react-bootstrap-typeahead@0.4.0/lib/TypeaheadInput.react.js",
      "npm:react-bootstrap-typeahead@0.4.0/lib/TokenizerInput.react.js",
      "npm:react-bootstrap-typeahead@0.4.0/lib/Token.react.js",
      "npm:react-bootstrap-typeahead@0.4.0/css/Token.css",
      "npm:react-input-autosize@0.6.13/lib/AutosizeInput.js",
      "npm:react-input-autosize@0.6.13.json",
      "npm:react-bootstrap-table@2.0.2/css/toastr.css!github:systemjs/plugin-css@0.1.21/css.js",
      "npm:react-bootstrap-table@2.0.2.json",
      "npm:react-bootstrap-table@2.0.2/css/react-bootstrap-table.css!github:systemjs/plugin-css@0.1.21/css.js",
      "npm:react-bootstrap-table@2.0.2/dist/react-bootstrap-table.min.js",
      "grade.io/containers/StudentQuizReport.jsx",
      "grade.io/models/QuizWork.js",
      "grade.io/containers/StudentLabSeriesReport.jsx",
      "grade.io/components/Reports/LabSeriesReport.jsx",
      "grade.io/models/LabWork.js",
      "grade.io/containers/TeacherQuizSubmit.jsx",
      "grade.io/components/Reports/Editable.jsx",
      "npm:react-bootstrap@0.28.3/lib/index.js",
      "npm:react-bootstrap@0.28.3.json",
      "npm:react-bootstrap@0.28.3/lib/FormControls/index.js",
      "npm:react-bootstrap@0.28.3/lib/FormControls/Static.js",
      "npm:react-bootstrap@0.28.3/lib/utils/childrenValueInputValidation.js",
      "npm:react-prop-types@0.3.0/lib/singlePropFrom.js",
      "npm:react-prop-types@0.3.0.json",
      "npm:babel-runtime@5.8.38/helpers/interop-require-default.js",
      "npm:babel-runtime@5.8.38.json",
      "npm:react-bootstrap@0.28.3/lib/InputBase.js",
      "npm:react-bootstrap@0.28.3/lib/Glyphicon.js",
      "npm:babel-runtime@5.8.38/helpers/extends.js",
      "npm:babel-runtime@5.8.38/core-js/object/assign.js",
      "npm:core-js@2.3.0/library/fn/object/assign.js",
      "npm:core-js@2.3.0.json",
      "npm:core-js@2.3.0/library/modules/_core.js",
      "npm:core-js@2.3.0/library/modules/es6.object.assign.js",
      "npm:core-js@2.3.0/library/modules/_object-assign.js",
      "npm:core-js@2.3.0/library/modules/_fails.js",
      "npm:core-js@2.3.0/library/modules/_iobject.js",
      "npm:core-js@2.3.0/library/modules/_cof.js",
      "npm:core-js@2.3.0/library/modules/_to-object.js",
      "npm:core-js@2.3.0/library/modules/_defined.js",
      "npm:core-js@2.3.0/library/modules/_object-pie.js",
      "npm:core-js@2.3.0/library/modules/_object-gops.js",
      "npm:core-js@2.3.0/library/modules/_object-keys.js",
      "npm:core-js@2.3.0/library/modules/_enum-bug-keys.js",
      "npm:core-js@2.3.0/library/modules/_object-keys-internal.js",
      "npm:core-js@2.3.0/library/modules/_shared-key.js",
      "npm:core-js@2.3.0/library/modules/_uid.js",
      "npm:core-js@2.3.0/library/modules/_shared.js",
      "npm:core-js@2.3.0/library/modules/_global.js",
      "npm:core-js@2.3.0/library/modules/_array-includes.js",
      "npm:core-js@2.3.0/library/modules/_to-index.js",
      "npm:core-js@2.3.0/library/modules/_to-integer.js",
      "npm:core-js@2.3.0/library/modules/_to-length.js",
      "npm:core-js@2.3.0/library/modules/_to-iobject.js",
      "npm:core-js@2.3.0/library/modules/_has.js",
      "npm:core-js@2.3.0/library/modules/_export.js",
      "npm:core-js@2.3.0/library/modules/_hide.js",
      "npm:core-js@2.3.0/library/modules/_descriptors.js",
      "npm:core-js@2.3.0/library/modules/_property-desc.js",
      "npm:core-js@2.3.0/library/modules/_object-dp.js",
      "npm:core-js@2.3.0/library/modules/_to-primitive.js",
      "npm:core-js@2.3.0/library/modules/_is-object.js",
      "npm:core-js@2.3.0/library/modules/_ie8-dom-define.js",
      "npm:core-js@2.3.0/library/modules/_dom-create.js",
      "npm:core-js@2.3.0/library/modules/_an-object.js",
      "npm:core-js@2.3.0/library/modules/_ctx.js",
      "npm:core-js@2.3.0/library/modules/_a-function.js",
      "npm:react-bootstrap@0.28.3/lib/FormGroup.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@2.3.0/library/fn/object/set-prototype-of.js",
      "npm:core-js@2.3.0/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@2.3.0/library/modules/_set-proto.js",
      "npm:core-js@2.3.0/library/modules/_object-gopd.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@2.3.0/library/fn/object/create.js",
      "npm:core-js@2.3.0/library/modules/es6.object.create.js",
      "npm:core-js@2.3.0/library/modules/_object-create.js",
      "npm:core-js@2.3.0/library/modules/_html.js",
      "npm:core-js@2.3.0/library/modules/_object-dps.js",
      "npm:react-bootstrap@0.28.3/lib/Fade.js",
      "npm:react-prop-types@0.3.0/lib/deprecated.js",
      "npm:react-overlays@0.6.3/lib/Transition.js",
      "npm:react-overlays@0.6.3.json",
      "npm:dom-helpers@2.4.0/events/on.js",
      "npm:dom-helpers@2.4.0.json",
      "npm:dom-helpers@2.4.0/util/inDOM.js",
      "npm:dom-helpers@2.4.0/transition/properties.js",
      "npm:react-bootstrap@0.28.3/lib/Collapse.js",
      "npm:react-bootstrap@0.28.3/lib/utils/createChainedFunction.js",
      "npm:dom-helpers@2.4.0/style/index.js",
      "npm:dom-helpers@2.4.0/style/removeStyle.js",
      "npm:dom-helpers@2.4.0/style/getComputedStyle.js",
      "npm:dom-helpers@2.4.0/util/camelizeStyle.js",
      "npm:dom-helpers@2.4.0/util/camelize.js",
      "npm:dom-helpers@2.4.0/util/babelHelpers.js",
      "npm:dom-helpers@2.4.0/util/hyphenateStyle.js",
      "npm:dom-helpers@2.4.0/util/hyphenate.js",
      "npm:react-bootstrap@0.28.3/lib/Well.js",
      "npm:react-bootstrap@0.28.3/lib/styleMaps.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@2.3.0/library/fn/object/keys.js",
      "npm:core-js@2.3.0/library/modules/es6.object.keys.js",
      "npm:core-js@2.3.0/library/modules/_object-sap.js",
      "npm:react-bootstrap@0.28.3/lib/utils/bootstrapUtils.js",
      "npm:react-bootstrap@0.28.3/lib/Tooltip.js",
      "npm:react-prop-types@0.3.0/lib/isRequiredForA11y.js",
      "npm:react-bootstrap@0.28.3/lib/Thumbnail.js",
      "npm:react-bootstrap@0.28.3/lib/SafeAnchor.js",
      "npm:react-bootstrap@0.28.3/lib/Tabs.js",
      "npm:react-bootstrap@0.28.3/lib/utils/ValidComponentChildren.js",
      "npm:keycode@2.1.1/index.js",
      "npm:keycode@2.1.1.json",
      "npm:react-bootstrap@0.28.3/lib/NavItem.js",
      "npm:babel-runtime@5.8.38/helpers/object-without-properties.js",
      "npm:react-bootstrap@0.28.3/lib/Nav.js",
      "npm:react-prop-types@0.3.0/lib/all.js",
      "npm:react-bootstrap@0.28.3/lib/Col.js",
      "npm:react-prop-types@0.3.0/lib/elementType.js",
      "npm:react-prop-types@0.3.0/lib/common.js",
      "npm:react-bootstrap@0.28.3/lib/Table.js",
      "npm:react-bootstrap@0.28.3/lib/Tab.js",
      "npm:react-bootstrap@0.28.3/lib/utils/TransitionEvents.js",
      "npm:react-bootstrap@0.28.3/lib/SplitButton.js",
      "npm:lodash-compat@3.10.2/object/pick.js",
      "npm:lodash-compat@3.10.2.json",
      "npm:lodash-compat@3.10.2/function/restParam.js",
      "npm:lodash-compat@3.10.2/internal/pickByCallback.js",
      "npm:lodash-compat@3.10.2/internal/baseForIn.js",
      "npm:lodash-compat@3.10.2/object/keysIn.js",
      "npm:lodash-compat@3.10.2/support.js",
      "npm:lodash-compat@3.10.2/lang/isString.js",
      "npm:lodash-compat@3.10.2/internal/isObjectLike.js",
      "npm:lodash-compat@3.10.2/lang/isObject.js",
      "npm:lodash-compat@3.10.2/internal/isLength.js",
      "npm:lodash-compat@3.10.2/internal/isIndex.js",
      "npm:lodash-compat@3.10.2/lang/isFunction.js",
      "npm:lodash-compat@3.10.2/lang/isArray.js",
      "npm:lodash-compat@3.10.2/internal/getNative.js",
      "npm:lodash-compat@3.10.2/lang/isNative.js",
      "npm:lodash-compat@3.10.2/internal/isHostObject.js",
      "npm:lodash-compat@3.10.2/lang/isArguments.js",
      "npm:lodash-compat@3.10.2/internal/isArrayLike.js",
      "npm:lodash-compat@3.10.2/internal/getLength.js",
      "npm:lodash-compat@3.10.2/internal/baseProperty.js",
      "npm:lodash-compat@3.10.2/internal/toObject.js",
      "npm:lodash-compat@3.10.2/internal/arrayEach.js",
      "npm:lodash-compat@3.10.2/internal/baseFor.js",
      "npm:lodash-compat@3.10.2/internal/createBaseFor.js",
      "npm:lodash-compat@3.10.2/internal/pickByArray.js",
      "npm:lodash-compat@3.10.2/internal/bindCallback.js",
      "npm:lodash-compat@3.10.2/utility/identity.js",
      "npm:lodash-compat@3.10.2/internal/baseFlatten.js",
      "npm:lodash-compat@3.10.2/internal/arrayPush.js",
      "npm:lodash-compat@3.10.2/object/omit.js",
      "npm:lodash-compat@3.10.2/internal/baseDifference.js",
      "npm:lodash-compat@3.10.2/internal/createCache.js",
      "npm:lodash-compat@3.10.2/internal/SetCache.js",
      "npm:lodash-compat@3.10.2/internal/cachePush.js",
      "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/baseIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/indexOfNaN.js",
      "npm:lodash-compat@3.10.2/internal/arrayMap.js",
      "npm:react-bootstrap@0.28.3/lib/SplitToggle.js",
      "npm:react-bootstrap@0.28.3/lib/DropdownToggle.js",
      "npm:react-bootstrap@0.28.3/lib/Button.js",
      "npm:react-bootstrap@0.28.3/lib/Dropdown.js",
      "npm:react-bootstrap@0.28.3/lib/utils/CustomPropTypes.js",
      "npm:react-bootstrap@0.28.3/lib/utils/childrenToArray.js",
      "npm:react-bootstrap@0.28.3/lib/DropdownMenu.js",
      "npm:react-overlays@0.6.3/lib/RootCloseWrapper.js",
      "npm:react-overlays@0.6.3/lib/utils/ownerDocument.js",
      "npm:dom-helpers@2.4.0/ownerDocument.js",
      "npm:react-overlays@0.6.3/lib/utils/createChainedFunction.js",
      "npm:react-overlays@0.6.3/lib/utils/addEventListener.js",
      "npm:dom-helpers@2.4.0/events/off.js",
      "npm:react-bootstrap@0.28.3/lib/ButtonGroup.js",
      "npm:uncontrollable@3.3.1/index.js",
      "npm:uncontrollable@3.3.1.json",
      "npm:uncontrollable@3.3.1/createUncontrollable.js",
      "npm:uncontrollable@3.3.1/utils.js",
      "npm:lodash-compat@3.10.2/collection/find.js",
      "npm:lodash-compat@3.10.2/internal/createFind.js",
      "npm:lodash-compat@3.10.2/internal/baseFindIndex.js",
      "npm:lodash-compat@3.10.2/internal/baseFind.js",
      "npm:lodash-compat@3.10.2/internal/baseCallback.js",
      "npm:lodash-compat@3.10.2/utility/property.js",
      "npm:lodash-compat@3.10.2/internal/isKey.js",
      "npm:lodash-compat@3.10.2/internal/basePropertyDeep.js",
      "npm:lodash-compat@3.10.2/internal/toPath.js",
      "npm:lodash-compat@3.10.2/internal/baseToString.js",
      "npm:lodash-compat@3.10.2/internal/baseGet.js",
      "npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js",
      "npm:lodash-compat@3.10.2/array/last.js",
      "npm:lodash-compat@3.10.2/internal/isStrictComparable.js",
      "npm:lodash-compat@3.10.2/internal/baseSlice.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqual.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js",
      "npm:lodash-compat@3.10.2/lang/isTypedArray.js",
      "npm:lodash-compat@3.10.2/internal/equalObjects.js",
      "npm:lodash-compat@3.10.2/object/keys.js",
      "npm:lodash-compat@3.10.2/internal/shimKeys.js",
      "npm:lodash-compat@3.10.2/internal/equalByTag.js",
      "npm:lodash-compat@3.10.2/internal/equalArrays.js",
      "npm:lodash-compat@3.10.2/internal/arraySome.js",
      "npm:lodash-compat@3.10.2/internal/baseMatches.js",
      "npm:lodash-compat@3.10.2/internal/getMatchData.js",
      "npm:lodash-compat@3.10.2/object/pairs.js",
      "npm:lodash-compat@3.10.2/internal/baseIsMatch.js",
      "npm:lodash-compat@3.10.2/internal/baseEach.js",
      "npm:lodash-compat@3.10.2/internal/createBaseEach.js",
      "npm:lodash-compat@3.10.2/internal/baseForOwn.js",
      "npm:dom-helpers@2.4.0/query/contains.js",
      "npm:dom-helpers@2.4.0/activeElement.js",
      "npm:react-bootstrap@0.28.3/lib/Row.js",
      "npm:react-bootstrap@0.28.3/lib/ResponsiveEmbed.js",
      "npm:react-bootstrap@0.28.3/lib/ProgressBar.js",
      "npm:react-bootstrap@0.28.3/lib/Interpolate.js",
      "npm:react-bootstrap@0.28.3/lib/Popover.js",
      "npm:react-bootstrap@0.28.3/lib/PanelGroup.js",
      "npm:react-bootstrap@0.28.3/lib/Panel.js",
      "npm:react-bootstrap@0.28.3/lib/Pagination.js",
      "npm:react-bootstrap@0.28.3/lib/PaginationButton.js",
      "npm:react-bootstrap@0.28.3/lib/utils/createSelectedEvent.js",
      "npm:react-bootstrap@0.28.3/lib/Pager.js",
      "npm:react-bootstrap@0.28.3/lib/PageItem.js",
      "npm:react-bootstrap@0.28.3/lib/PageHeader.js",
      "npm:react-bootstrap@0.28.3/lib/OverlayTrigger.js",
      "npm:react-bootstrap@0.28.3/lib/Overlay.js",
      "npm:react-overlays@0.6.3/lib/Overlay.js",
      "npm:react-prop-types@0.2.2/lib/elementType.js",
      "npm:react-prop-types@0.2.2.json",
      "npm:react-prop-types@0.2.2/lib/common.js",
      "npm:react-overlays@0.6.3/lib/Position.js",
      "npm:react-prop-types@0.2.2/lib/mountable.js",
      "npm:react-overlays@0.6.3/lib/utils/overlayPositionUtils.js",
      "npm:dom-helpers@2.4.0/query/scrollTop.js",
      "npm:dom-helpers@2.4.0/query/isWindow.js",
      "npm:dom-helpers@2.4.0/query/position.js",
      "npm:dom-helpers@2.4.0/query/scrollLeft.js",
      "npm:dom-helpers@2.4.0/query/offsetParent.js",
      "npm:dom-helpers@2.4.0/query/offset.js",
      "npm:react-overlays@0.6.3/lib/utils/getContainer.js",
      "npm:react-overlays@0.6.3/lib/Portal.js",
      "npm:react-bootstrap@0.28.3/lib/NavDropdown.js",
      "npm:react-bootstrap@0.28.3/lib/NavbarBrand.js",
      "npm:react-bootstrap@0.28.3/lib/NavBrand.js",
      "npm:react-bootstrap@0.28.3/lib/utils/deprecationWarning.js",
      "npm:react-bootstrap@0.28.3/lib/Navbar.js",
      "npm:react-bootstrap@0.28.3/lib/NavbarCollapse.js",
      "npm:react-bootstrap@0.28.3/lib/NavbarToggle.js",
      "npm:react-bootstrap@0.28.3/lib/NavbarHeader.js",
      "npm:react-bootstrap@0.28.3/lib/deprecated/Navbar.js",
      "npm:react-bootstrap@0.28.3/lib/Grid.js",
      "npm:react-bootstrap@0.28.3/lib/ModalTitle.js",
      "npm:react-bootstrap@0.28.3/lib/ModalHeader.js",
      "npm:react-bootstrap@0.28.3/lib/ModalFooter.js",
      "npm:react-bootstrap@0.28.3/lib/ModalBody.js",
      "npm:react-bootstrap@0.28.3/lib/Modal.js",
      "npm:react-overlays@0.6.3/lib/utils/isOverflowing.js",
      "npm:react-overlays@0.6.3/lib/Modal.js",
      "npm:react-overlays@0.6.3/lib/utils/addFocusListener.js",
      "npm:react-overlays@0.6.3/lib/ModalManager.js",
      "npm:react-overlays@0.6.3/lib/utils/manageAriaHidden.js",
      "npm:dom-helpers@2.4.0/util/scrollbarSize.js",
      "npm:dom-helpers@2.4.0/class/index.js",
      "npm:dom-helpers@2.4.0/class/hasClass.js",
      "npm:dom-helpers@2.4.0/class/removeClass.js",
      "npm:dom-helpers@2.4.0/class/addClass.js",
      "npm:react-bootstrap@0.28.3/lib/ModalDialog.js",
      "npm:dom-helpers@2.4.0/events/index.js",
      "npm:dom-helpers@2.4.0/events/filter.js",
      "npm:dom-helpers@2.4.0/query/querySelectorAll.js",
      "npm:react-bootstrap@0.28.3/lib/MenuItem.js",
      "npm:react-bootstrap@0.28.3/lib/ListGroupItem.js",
      "npm:react-bootstrap@0.28.3/lib/ListGroup.js",
      "npm:react-bootstrap@0.28.3/lib/Label.js",
      "npm:react-bootstrap@0.28.3/lib/Jumbotron.js",
      "npm:react-bootstrap@0.28.3/lib/Input.js",
      "npm:babel-runtime@5.8.38/helpers/interop-require-wildcard.js",
      "npm:react-bootstrap@0.28.3/lib/Image.js",
      "npm:react-bootstrap@0.28.3/lib/DropdownButton.js",
      "npm:react-bootstrap@0.28.3/lib/CollapsibleNav.js",
      "npm:react-bootstrap@0.28.3/lib/CarouselItem.js",
      "npm:react-bootstrap@0.28.3/lib/Carousel.js",
      "npm:react-bootstrap@0.28.3/lib/ButtonToolbar.js",
      "npm:react-bootstrap@0.28.3/lib/ButtonInput.js",
      "npm:react-bootstrap@0.28.3/lib/BreadcrumbItem.js",
      "npm:react-bootstrap@0.28.3/lib/Breadcrumb.js",
      "npm:react-bootstrap@0.28.3/lib/Badge.js",
      "npm:react-bootstrap@0.28.3/lib/Alert.js",
      "npm:react-bootstrap@0.28.3/lib/Accordion.js",
      "npm:radium@0.16.6/lib/index.js",
      "npm:radium@0.16.6.json",
      "npm:radium@0.16.6/lib/resolve-styles.js",
      "npm:exenv@1.2.1/index.js",
      "npm:exenv@1.2.1.json",
      "npm:radium@0.16.6/lib/plugins/index.js",
      "npm:radium@0.16.6/lib/plugins/visited-plugin.js",
      "npm:radium@0.16.6/lib/plugins/resolve-media-queries-plugin.js",
      "npm:radium@0.16.6/lib/plugins/resolve-interaction-styles-plugin.js",
      "npm:radium@0.16.6/lib/plugins/mouse-up-listener.js",
      "npm:radium@0.16.6/lib/plugins/prefix-plugin.js",
      "npm:radium@0.16.6/lib/prefixer.js",
      "npm:inline-style-prefixer@0.6.7/lib/Prefixer.js",
      "npm:inline-style-prefixer@0.6.7.json",
      "npm:inline-style-prefixer@0.6.7/lib/Plugins.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/flexboxOld.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/flexboxIE.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/transition.js",
      "npm:inline-style-prefixer@0.6.7/lib/utils/capitalizeString.js",
      "npm:inline-style-prefixer@0.6.7/lib/utils/camelToDashCase.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/gradient.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/sizing.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/flex.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/cursor.js",
      "npm:inline-style-prefixer@0.6.7/lib/plugins/calc.js",
      "npm:inline-style-prefixer@0.6.7/lib/caniuseData.js",
      "npm:inline-style-prefixer@0.6.7/lib/utils/warn.js",
      "npm:inline-style-prefixer@0.6.7/lib/utils/assign.js",
      "npm:inline-style-prefixer@0.6.7/lib/utils/getPrefixedKeyframes.js",
      "npm:inline-style-prefixer@0.6.7/lib/utils/getBrowserInformation.js",
      "npm:bowser@1.0.0/bowser.js",
      "npm:bowser@1.0.0.json",
      "npm:radium@0.16.6/lib/plugins/merge-style-array-plugin.js",
      "npm:radium@0.16.6/lib/plugins/keyframes-plugin.js",
      "npm:radium@0.16.6/lib/plugins/check-props-plugin.js",
      "npm:radium@0.16.6/lib/merge-styles.js",
      "npm:radium@0.16.6/lib/hash.js",
      "npm:radium@0.16.6/lib/get-state-key.js",
      "npm:radium@0.16.6/lib/get-state.js",
      "npm:radium@0.16.6/lib/css-rule-set-to-string.js",
      "npm:radium@0.16.6/lib/map-object.js",
      "npm:radium@0.16.6/lib/camel-case-props-to-dash-case.js",
      "npm:radium@0.16.6/lib/append-px-if-needed.js",
      "npm:radium@0.16.6/lib/append-important-to-each-value.js",
      "npm:radium@0.16.6/lib/keyframes.js",
      "npm:radium@0.16.6/lib/components/style-root.js",
      "npm:radium@0.16.6/lib/components/style-sheet.js",
      "npm:radium@0.16.6/lib/style-keeper.js",
      "npm:radium@0.16.6/lib/enhancer.js",
      "npm:radium@0.16.6/lib/components/style.js",
      "grade.io/containers/TeacherView.jsx",
      "grade.io/containers/TeacherGradedWorks.jsx",
      "grade.io/components/WorksList.jsx",
      "grade.io/containers/TeacherWorkReport.jsx",
      "grade.io/containers/TeacherUngradedWorks.jsx",
      "grade.io/components/TabbedPane/TabbedPane.jsx",
      "grade.io/components/TabbedPane/Tab.jsx",
      "grade.io/components/TabbedPane/Tabs.jsx",
      "grade.io/containers/StudentView.jsx",
      "grade.io/containers/StudentDashboard.jsx",
      "grade.io/components/ResultDashboard/ResultDashboard.jsx",
      "grade.io/components/ResultDashboard/Gauge.jsx",
      "grade.io/constants/UIConstants.js",
      "grade.io/containers/StudentSubmitForm.jsx",
      "grade.io/components/SubmitForm/Prototype.jsx",
      "npm:bootstrap-select@1.10.0/dist/js/bootstrap-select.js",
      "npm:bootstrap-select@1.10.0.json",
      "grade.io/components/SubmitForm/Lab.jsx",
      "grade.io/containers/Authentication.jsx",
      "grade.io/components/Authentication/Register.jsx",
      "grade.io/components/Authentication/PasswordField.jsx",
      "grade.io/components/Authentication/Login.jsx",
      "npm:formsy-react@0.18.0/lib/main.js",
      "npm:formsy-react@0.18.0.json",
      "npm:formsy-react@0.18.0/lib/Decorator.js",
      "npm:formsy-react@0.18.0/lib/Mixin.js",
      "npm:formsy-react@0.18.0/lib/utils.js",
      "npm:formsy-react@0.18.0/lib/HOC.js",
      "npm:form-data-to-object@0.2.0/index.js",
      "npm:form-data-to-object@0.2.0.json",
      "npm:formsy-react@0.18.0/lib/validationRules.js",
      "grade.io/components/Authentication/Authentication.jsx",
      "grade.io/containers/app.jsx",
      "grade.io/containers/Navigation.jsx",
      "grade.io/components/Navigation.jsx"
    ]
  }
});
