/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import angular from 'angular';
import io from 'socket.io-client'; // eslint-disable-line no-unused-vars

angular
.module('ignite-console.socket', [
])
.provider('igniteSocketFactory', [function() {
    let _options = {};

    /**
     * @param {Object} options Socket io options.
     */
    this.set = (options) => {
        _options = options;
    };

    this.$get = ['socketFactory', function(socketFactory) {
        return () => {
            const ioSocket = io.connect(_options);

            return socketFactory({ioSocket});
        };
    }];
}]);
