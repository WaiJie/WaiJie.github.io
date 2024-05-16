import React, { useEffect, useRef } from 'react';

const TableauEmbed = () => {
  const tableauRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    tableauRef.current.appendChild(script);

    const divElement = document.getElementById('viz1715883429840');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width='100%';
    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
  }, []);

  return (
    <div ref={tableauRef} style={{ width: '100%', height: '600px' }}>
      <div className='tableauPlaceholder' id='viz1715883429840' style={{ position: 'relative' }}>
        <noscript>
          <a href='#'>
            <img alt=' ' src='https://public.tableau.com/static/images/HD/HDBresalehighvalue4RMflatattributes/GeographicDistributionofHighvalueflatsabove1MSGD/1_rss.png' style={{ border: 'none' }} />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='views/HDBresalehighvalue4RMflatattributes/GeographicDistributionofHighvalueflatsabove1MSGD?:language=en-US&amp;:embed=true&amp;:sid=' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/HD/HDBresalehighvalue4RMflatattributes/GeographicDistributionofHighvalueflatsabove1MSGD/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
};

export default TableauEmbed;