import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/page-title';
import { tailwindStyles } from '../styles';

@customElement('page-about')
export class PageAbout extends LitElement {
  static styles = [tailwindStyles];
  // static styles = css`
  //   section {
  //     display: flex;
  //     flex-shrink: 1;
  //     flex-direction: column;
  //     align-items: center;
  //   }

  //   section * {
  //     width: var(--content-width);
  //   }

  //   p {
  //     color: var(--primary-color);
  //   }
  // `;

  render() {
    return html`
      <section>
        <page-title>About</page-title>
        <p>
          Lorem ipsu m dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur blandit quam, non tincidunt mi semper ut. Vestibulum
          vestibulum justo at ipsum tristique gravida. Praesent fermentum arcu
          tellus, a eleifend elit sodales ac. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Curabitur et elit leo. Sed vestibulum
          diam eu diam volutpat venenatis. Donec molestie nunc mauris, non
          accumsan nisl rutrum ut. Etiam ac aliquet mi. Cras scelerisque purus
          placerat, vehicula tortor at, euismod felis. Sed consequat lacinia
          magna ac elementum. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nullam sit amet nisl
          accumsan risus scelerisque pharetra non ut mauris. Donec vulputate
          bibendum lectus sed pellentesque. Pellentesque volutpat vel lacus sed
          luctus. Nunc convallis lobortis tellus. Suspendisse vitae justo a
          neque faucibus lobortis. Praesent tempor elit vitae magna viverra
          aliquet. Donec sodales leo lectus, a commodo arcu gravida a. Aenean
          vestibulum in velit vel molestie. Fusce nunc odio, tempus quis tortor
          sit amet, tempus vestibulum augue. Morbi lacinia commodo turpis vel
          venenatis. Etiam volutpat, metus at egestas tincidunt, sapien velit
          lacinia lectus, eu dignissim augue neque eu leo. Etiam vestibulum ex
          elit, et dapibus urna pellentesque vehicula. Aenean porttitor erat sit
          amet mi ultricies cursus. Etiam volutpat arcu eu nunc consequat
          feugiat. Curabitur ultricies convallis ligula at iaculis. Suspendisse
          tellus elit, tristique ac hendrerit vitae, vestibulum id augue. Donec
          felis felis, cursus sit amet vehicula nec, sagittis eget ligula.
          Curabitur sit amet enim leo. Vivamus egestas urna lorem, a interdum
          odio posuere vel. Suspendisse pharetra, orci vitae condimentum
          finibus, odio tortor facilisis arcu, laoreet tincidunt libero ex ac
          arcu. In et sapien vitae massa efficitur lacinia sed vel sapien.
          Praesent interdum arcu commodo, eleifend ligula sed, semper lorem.
          Aenean sit amet posuere turpis. Integer ut erat ut metus laoreet
          sodales. Nullam risus velit, sodales hendrerit nunc eget, sagittis
          sagittis tellus. Maecenas at lorem quam. Curabitur at lectus quam.
          Fusce facilisis porttitor nisi, blandit ultrices neque ornare ac.
          Quisque velit nunc, cursus ac mollis fermentum, volutpat in ligula.
          Aenean et quam eget nulla accumsan varius. Suspendisse potenti. Sed
          fringilla neque lacinia augue vehicula, eu iaculis sapien facilisis.
          Nullam tincidunt finibus est eu gravida. Proin consectetur sapien et
          suscipit finibus. Morbi neque nibh, eleifend a est vitae, porta
          lobortis lectus. Vivamus nec mi turpis. In pharetra leo eros, in
          scelerisque nibh tincidunt a. Fusce non eros eget felis imperdiet
          aliquam. Suspendisse sed hendrerit tellus. In rhoncus accumsan orci,
          sed aliquet odio suscipit ut. Ut dignissim nulla eu enim lobortis, et
          iaculis ligula sollicitudin. Mauris accumsan lectus mi, et vulputate
          velit vehicula sit amet. Pellentesque viverra ex placerat aliquam
          condimentum. Generated 5 paragraphs, 432 words, 2958 bytes of Lorem
          Ipsum
        </p>
      </section>
    `;
  }
}
