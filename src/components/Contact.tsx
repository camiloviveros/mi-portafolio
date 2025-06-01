"use client";
import { useState } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white font-code">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-400">async function</span>{' '}
            <span className="text-white">contactMe</span>
            <span className="text-gray-400">() {'{'}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            <span className="text-gray-500">// </span>
            Siempre abierto a nuevos proyectos y colaboraciones
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info de contacto */}
          <div className="space-y-8">
            <div className="bg-gray-900 border-2 border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-gray-400">const</span>{' '}
                <span className="text-white">info</span>{' '}
                <span className="text-gray-400">=</span>{' '}
                <span className="text-gray-400">{'{'}</span>
              </h3>
              
              <p className="text-sm text-gray-400 mb-6 pl-8 font-mono">
                <span className="text-gray-500">// </span>
                Desarrollador colombiano, honesto y comprometido. Listo para trabajar en cualquier entorno.
              </p>
              
              <div className="space-y-6 pl-8">
                <a href="mailto:camiloviveros111@gmail.com" className="flex items-center gap-4 group hover:text-white transition-colors">
                  <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                    <span className="text-2xl">@</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">email:</p>
                    <p className="font-mono break-all">"camiloviveros111@gmail.com"</p>
                  </div>
                </a>

                <a href="tel:+573173118659" className="flex items-center gap-4 group hover:text-white transition-colors">
                  <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                    <span className="text-2xl">#</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">phone:</p>
                    <p className="font-mono">"+57 317 311 8659"</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center">
                    <span className="text-2xl">{'{ }'}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">location:</p>
                    <p className="font-mono">"La Unión, Nariño"</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mt-6">
                <span className="text-gray-400">{'}'}</span>;
              </h3>
            </div>
          </div>

          {/* Redes Sociales - Expandido */}
          <div className="bg-gray-900 border-2 border-gray-800 p-8">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-gray-400">const</span>{' '}
              <span className="text-white">socialLinks</span>{' '}
              <span className="text-gray-400">=</span>{' '}
              <span className="text-gray-400">{'{'}</span>
            </h3>
            
            <div className="space-y-6 pl-8">
              {/* GitHub */}
              <a href="https://github.com/camiloviveros" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                  <span className="font-mono text-sm">GH</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">github:</p>
                  <p className="font-mono text-sm break-all">"@camiloviveros"</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="http://www.linkedin.com/in/william-camilo-gutierrez-viveros-3740a5369" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                  <span className="font-mono text-sm">IN</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">linkedin:</p>
                  <p className="font-mono text-sm">"William Camilo"</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/share/15znxLCF4Z/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                  <span className="font-mono text-sm">FB</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">facebook:</p>
                  <p className="font-mono text-sm">"Camilo Viveros"</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/camiloviveros111?igsh=MTViZ3d0cGRsOGNtdA==" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                  <span className="font-mono text-sm">IG</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">instagram:</p>
                  <p className="font-mono text-sm">"@camiloviveros111"</p>
                </div>
              </a>

              {/* WhatsApp Personal */}
              <a href="https://wa.me/573178130475" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                  <span className="font-mono text-sm">WA</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">whatsapp:</p>
                  <p className="font-mono text-sm">"+57 317 813 0475"</p>
                </div>
              </a>

              {/* WhatsApp Alternativo */}
              <a href="https://wa.me/573173118659" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                  <span className="font-mono text-xs">WA2</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">whatsapp_alt:</p>
                  <p className="font-mono text-sm">"+57 317 311 8659"</p>
                </div>
              </a>
            </div>
            
            <h3 className="text-2xl font-bold mt-6">
              <span className="text-gray-400">{'}'}</span>;
            </h3>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-black border-2 border-gray-700">
              <h4 className="text-lg font-bold mb-4 font-mono">
                <span className="text-gray-400">if (</span>
                interested
                <span className="text-gray-400">) {'{'}</span>
              </h4>
              <p className="text-gray-300 mb-4 font-mono text-sm">
                connect() // ¡Conectemos y creemos algo increíble!
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/573178130475" target="_blank" rel="noopener noreferrer"
                   className="py-2 px-4 bg-green-600 text-white text-center font-bold hover:bg-green-700 transition-colors text-sm">
                  WhatsApp
                </a>
                <a href="mailto:camiloviveros111@gmail.com"
                   className="py-2 px-4 bg-white text-black text-center font-bold hover:bg-gray-200 transition-colors text-sm">
                  Email
                </a>
              </div>
              <h4 className="text-lg font-bold mt-4 font-mono">
                <span className="text-gray-400">{'}'}</span>
              </h4>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-10 border-t border-gray-800">
          <p className="text-gray-400 font-mono">
            <span className="text-gray-500">// </span>
            © 2025 William Camilo. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 font-mono">
            <span className="text-gray-600">/* </span>
            Built with Next.js && Tailwind CSS
            <span className="text-gray-600"> */</span>
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .font-code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
      `}</style>
    </section>
  );
};

export default Contact;