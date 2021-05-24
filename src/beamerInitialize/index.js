export default function beamerInitialize(id, url=null, args={}) {
  if (!window) {
    return;
  }

  if (!id) {
    throw Error('Must provide "id". https://app.getbeamer.com/embed');
  }

  window.beamer_config = {
    product_id: id,
    selector: args.selector,
    display: args.display,
    display_position: args.display_position,
    top: args.top,
    right: args.right,
    bottom: args.bottom,
    left: args.left,
    embed: args.embed,
    button: args.button,
    button_position: args.button_position,
    icon: args.icon,
    bounce: args.bounce,
    notification_prompt: args.notification_prompt,
    notification_prompt_delay: args.notification_prompt_delay,
    language: args.language,
    filter: args.filter,
    force_filter: args.force_filter,
    filter_by_url: args.filter_by_url,
    mobile: args.mobile,
    lazy: args.lazy,
    alert: args.alert,
    force_button: args.force_button,
    counter: args.counter,
    first_visit_unread: args.first_visit_unread,
    standalone: args.standalone,
    post_request: args.post_request,
    delay: args.delay,
    callback: args.callback,
    onclick: args.onclick,
    onopen: args.onopen,
    onclose: args.onclose,
    onerror: args.onerror,
    user_firstname: args.user_firstname,
    user_lastname: args.user_lastname,
    user_email: args.user_email,
    user_id: args.user_id,
    multi_user: args.multi_user,
    nps_delay: args.nps_delay,
    user_created_at: args.user_created_at
  };

  const beamerURL = url || "https://app.getbeamer.com/js/beamer-embed.js";

  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");

  script.defer = "defer";
  script.src = beamerURL;
  head.appendChild(script);
}
