// start tracking
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'G-2B8DVYDL94']);
_gaq.push(['_trackPageview']);

function trackButton(btn) {
    _gaq.push(['_trackEvent', btn.target.id, 'clicked']);
}

function getContainer() {
    // create container
    var btn_container = document.createElement('div');
    btn_container.className = "btn-container";

    // create open in steam button
    var btn_open_in_client = document.createElement('a');
    btn_open_in_client.className = "btnv6_blue_hoverfade medium_btn";
    btn_open_in_client.setAttribute('href', 'steam://openurl/'.concat(document.URL));
    btn_open_in_client.setAttribute('id', 'ext_btnOIC');
    btn_open_in_client.addEventListener('click', trackButton);

    var span_open_in_client = document.createElement('span');
    span_open_in_client.className = 'btn-text';
    span_open_in_client.innerHTML = 'Open in Steam Client';
    btn_open_in_client.appendChild(span_open_in_client);

    // tracker
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2B8DVYDL94');

    // add all buttons to container
    btn_container.appendChild(btn_open_in_client);

    return btn_container;
}

document.querySelector('div.responsive_page_content')
    .insertBefore(getContainer(), 
    document.querySelector('div.responsive_page_template_content'));