import {InMemoryDbService} from 'angular-in-memory-web-api';
import {State} from '../interfaces/todo';

export class InMemTodoService implements InMemoryDbService {
  createDb(): any {
    const todos = [
      {
        id: 0,
        state: State.UnDone,
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl vitae enim lobortis elementum. Cras ultrices sollicitudin sapien sed consequat. Donec est mi, molestie eget justo eu, commodo semper mauris. Cras sapien nibh, porta in bibendum id, efficitur sit amet nibh. Nam convallis egestas mauris vel efficitur. Phasellus ac ex sem. Proin imperdiet mauris turpis, nec pellentesque massa vehicula non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum vitae nibh eu facilisis. Praesent non mauris ut mi feugiat gravida quis in mi. Aenean sed elit pellentesque, laoreet sem blandit, eleifend purus. Fusce imperdiet tempor ultrices. Pellentesque finibus est tellus, vitae efficitur sapien pretium vitae. Etiam in dictum tellus. Curabitur molestie dolor ante, nec venenatis sem finibus et. Mauris semper tristique vehicula.\n' +
          '\n' +
          'Donec nec lorem dui. Vivamus quam massa, interdum et est quis, efficitur vestibulum nulla. Nam nec justo eget dui sagittis laoreet quis in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fermentum, lorem id laoreet auctor, ligula massa tincidunt tortor, sit amet porta risus turpis eget orci. Aliquam dictum mattis velit eu consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
          '\n' +
          'Nulla ullamcorper odio ut est tempor, vel gravida nunc viverra. Nam eget urna sit amet erat bibendum euismod quis sed mi. Suspendisse potenti. Proin vitae augue metus. Etiam tristique ac nibh sed eleifend. Mauris suscipit justo sed massa accumsan aliquam. Nullam sed suscipit nisl. Praesent tincidunt nibh et mauris ornare sodales. Sed accumsan turpis sed dictum malesuada. Nam pulvinar dolor suscipit justo aliquet, quis mollis ex pulvinar. Duis et molestie dolor, vel volutpat lorem. Donec iaculis id eros a sodales. Fusce quis urna lectus.'
      },
      {
        id: 1,
        state: State.UnDone,
        title: 'test1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl vitae enim lobortis elementum. Cras ultrices sollicitudin sapien sed consequat. Donec est mi, molestie eget justo eu, commodo semper mauris. Cras sapien nibh, porta in bibendum id, efficitur sit amet nibh. Nam convallis egestas mauris vel efficitur. Phasellus ac ex sem. Proin imperdiet mauris turpis, nec pellentesque massa vehicula non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam interdum vitae nibh eu facilisis. Praesent non mauris ut mi feugiat gravida quis in mi. Aenean sed elit pellentesque, laoreet sem blandit, eleifend purus. Fusce imperdiet tempor ultrices. Pellentesque finibus est tellus, vitae efficitur sapien pretium vitae. Etiam in dictum tellus. Curabitur molestie dolor ante, nec venenatis sem finibus et. Mauris semper tristique vehicula.\n' +
          '\n' +
          'Donec nec lorem dui. Vivamus quam massa, interdum et est quis, efficitur vestibulum nulla. Nam nec justo eget dui sagittis laoreet quis in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fermentum, lorem id laoreet auctor, ligula massa tincidunt tortor, sit amet porta risus turpis eget orci. Aliquam dictum mattis velit eu consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
          '\n' +
          'Nulla ullamcorper odio ut est tempor, vel gravida nunc viverra. Nam eget urna sit amet erat bibendum euismod quis sed mi. Suspendisse potenti. Proin vitae augue metus. Etiam tristique ac nibh sed eleifend. Mauris suscipit justo sed massa accumsan aliquam. Nullam sed suscipit nisl. Praesent tincidunt nibh et mauris ornare sodales. Sed accumsan turpis sed dictum malesuada. Nam pulvinar dolor suscipit justo aliquet, quis mollis ex pulvinar. Duis et molestie dolor, vel volutpat lorem. Donec iaculis id eros a sodales. Fusce quis urna lectus.'
      },
      {
        id: 2,
        state: State.UnDone,
        title: 'test2',
        description: 'Vivamus finibus, quam sit amet vestibulum lobortis, massa nisl euismod mauris, non pulvinar tortor elit et diam. Etiam vitae ultrices urna. Integer odio massa, porta id vestibulum eleifend, pharetra nec turpis. Vestibulum luctus iaculis tortor. Maecenas semper, orci eget mattis sollicitudin, arcu dolor porta nulla, sit amet mollis erat dui in felis. Proin magna enim, placerat a dolor imperdiet, luctus auctor nisl. Vestibulum nec venenatis arcu. Vivamus in ultricies mauris. Maecenas gravida et enim et efficitur. Vivamus mi lectus, vestibulum in semper at, ullamcorper sit amet neque. Integer et ante mollis, lobortis arcu nec, scelerisque massa. Quisque ultricies magna neque, vel porta urna pharetra vitae.'
      },
      {
        id: 3,
        state: State.Done,
        title: 'test3',
        description: 'Vivamus finibus, quam sit amet vestibulum lobortis, massa nisl euismod mauris, non pulvinar tortor elit et diam. Etiam vitae ultrices urna. Integer odio massa, porta id vestibulum eleifend, pharetra nec turpis. Vestibulum luctus iaculis tortor. Maecenas semper, orci eget mattis sollicitudin, arcu dolor porta nulla, sit amet mollis erat dui in felis. Proin magna enim, placerat a dolor imperdiet, luctus auctor nisl. Vestibulum nec venenatis arcu. Vivamus in ultricies mauris. Maecenas gravida et enim et efficitur. Vivamus mi lectus, vestibulum in semper at, ullamcorper sit amet neque. Integer et ante mollis, lobortis arcu nec, scelerisque massa. Quisque ultricies magna neque, vel porta urna pharetra vitae.\n' +
          '\n' +
          'In hac habitasse platea dictumst. Duis at velit a odio luctus mattis id ac magna. Aenean lacus ligula, egestas a tempor et, cursus ut dui. Praesent vel massa ut massa auctor sollicitudin. Nunc condimentum sapien ut massa porttitor, vel volutpat lacus ullamcorper. Morbi consequat elementum interdum. Vestibulum dapibus in purus ac vehicula. Nunc elementum non ante id vestibulum. Curabitur tempor velit a cursus blandit. Proin at elit elementum, vehicula lorem vitae, posuere enim. Praesent aliquet ornare erat, non auctor justo eleifend et. Suspendisse odio mauris, laoreet eget congue egestas, ullamcorper eu risus. Aenean luctus dolor dolor, et suscipit enim tempus ac. Phasellus non tincidunt purus.'
      },
      {
        id: 4,
        state: State.Done,
        title: 'test4',
        description: 'Vivamus finibus, quam sit amet vestibulum lobortis, massa nisl euismod mauris, non pulvinar tortor elit et diam. Etiam vitae ultrices urna. Integer odio massa, porta id vestibulum eleifend, pharetra nec turpis. Vestibulum luctus iaculis tortor. Maecenas semper, orci eget mattis sollicitudin, arcu dolor porta nulla, sit amet mollis erat dui in felis. Proin magna enim, placerat a dolor imperdiet, luctus auctor nisl. Vestibulum nec venenatis arcu. Vivamus in ultricies mauris. Maecenas gravida et enim et efficitur. Vivamus mi lectus, vestibulum in semper at, ullamcorper sit amet neque. Integer et ante mollis, lobortis arcu nec, scelerisque massa. Quisque ultricies magna neque, vel porta urna pharetra vitae.'
      }
    ];
    return {todos};
  }
}
