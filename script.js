function getContainer() {
    // create container
    var btn_container = document.createElement('div');
    btn_container.className = "btn-container";

    // create open in steam button
    var btn_open_in_client = document.createElement('a');
    btn_open_in_client.className = "btnv6_blue_hoverfade medium_btn";
    btn_open_in_client.setAttribute('href', 'steam://openurl/'.concat(document.URL));
    var span_open_in_client = document.createElement('span');
    span_open_in_client.className = 'btn-text';
    span_open_in_client.innerHTML = 'Open in Steam Client';
    btn_open_in_client.appendChild(span_open_in_client);

    // add all buttons to container
    btn_container.appendChild(btn_open_in_client);

    // add google analytics tracker
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    btn_container.appendChild(s);

    return btn_container;
}

document.querySelector('div.responsive_page_content')
    .insertBefore(getContainer(), 
    document.querySelector('div.responsive_page_template_content'));