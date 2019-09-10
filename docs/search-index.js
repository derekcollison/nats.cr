crystal_doc_search_index_callback({"repository_name":"github.com/nats-io/nats.cr","body":"# NATS - Crystal Client\n\nSimple NATS client for the [Crystal](https://http://crystal-lang.org) programming language.\n\n[![License Apache 2](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)\n[![Build Status](https://travis-ci.org/nats-io/nats.cr.svg?branch=master)](http://travis-ci.org/nats-io/nats.cr)\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\n   dependencies:\n     nats:\n       github: nats-io/nats.cr\n```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"nats\"\n\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.subscribe(\"foo\") { |msg| puts \"Received '#{msg}'\"}\nnc.publish(\"foo\", \"Hello!\")\n\nsub = nc.subscribe(\"req\") do |msg|\n  msg.respond(\"ANSWER is 42\")\nend\n\nanswer = nc.request(\"req\", \"Help!\")\nputs \"Received a response '#{answer}'!\"\n\nsub.close\n\nnc.flush\nnc.close\n```\n\n## License\n\nUnless otherwise noted, the NATS source files are distributed under\nthe Apache Version 2.0 license found in the LICENSE file.\n","program":{"html_id":"github.com/nats-io/nats.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/nats-io/nats.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/nats-io/nats.cr/NATS","path":"NATS.html","kind":"module","full_name":"NATS","name":"NATS","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"nats/nuid.cr","line_number":20,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/nuid.cr"},{"filename":"nats/msg.cr","line_number":15,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/msg.cr"},{"filename":"nats/subscription.cr","line_number":15,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/subscription.cr"},{"filename":"nats/connection.cr","line_number":24,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr"}],"repository_name":"github.com/nats-io/nats.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"LANG","name":"LANG","value":"\"crystal\"","doc":null,"summary":null},{"id":"VERSION","name":"VERSION","value":"\"0.0.1\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/nats-io/nats.cr/NATS/Connection","path":"NATS/Connection.html","kind":"class","full_name":"NATS::Connection","name":"Connection","abstract":false,"superclass":{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/nats-io/nats.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"nats/connection.cr","line_number":28,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr"}],"repository_name":"github.com/nats-io/nats.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/nats-io/nats.cr/NATS","kind":"module","full_name":"NATS","name":"NATS"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(host,port,user:String?=nil,pass:String?=nil,name:String?=nil,echo=true,pedantic=false)-class-method","html_id":"new(host,port,user:String?=nil,pass:String?=nil,name:String?=nil,echo=true,pedantic=false)-class-method","name":"new","doc":"Creates a new connection to a NATS Server.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc = NATS::Connection.new(\"tls://demo.nats.io\")\nnc = NATS::Connection.new(\"nats://#{user}:#{pass}@127.0.0.1:4222\")\nnc = NATS::Connection.new(4222, name: \"Sample App\", user: \"derek\", pass: \"s3cr3t\")\nnc = NATS::Connection.new(4222)\nnc = NATS::Connection.new\n```","summary":"<p>Creates a new connection to a NATS Server.</p>","abstract":false,"args":[{"name":"host","doc":null,"default_value":"","external_name":"host","restriction":""},{"name":"port","doc":null,"default_value":"","external_name":"port","restriction":""},{"name":"user","doc":null,"default_value":"nil","external_name":"user","restriction":"String | ::Nil"},{"name":"pass","doc":null,"default_value":"nil","external_name":"pass","restriction":"String | ::Nil"},{"name":"name","doc":null,"default_value":"nil","external_name":"name","restriction":"String | ::Nil"},{"name":"echo","doc":null,"default_value":"true","external_name":"echo","restriction":""},{"name":"pedantic","doc":null,"default_value":"false","external_name":"pedantic","restriction":""}],"args_string":"(host, port, user : String? = <span class=\"n\">nil</span>, pass : String? = <span class=\"n\">nil</span>, name : String? = <span class=\"n\">nil</span>, echo = <span class=\"n\">true</span>, pedantic = <span class=\"n\">false</span>)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L55","def":{"name":"new","args":[{"name":"host","doc":null,"default_value":"","external_name":"host","restriction":""},{"name":"port","doc":null,"default_value":"","external_name":"port","restriction":""},{"name":"user","doc":null,"default_value":"nil","external_name":"user","restriction":"String | ::Nil"},{"name":"pass","doc":null,"default_value":"nil","external_name":"pass","restriction":"String | ::Nil"},{"name":"name","doc":null,"default_value":"nil","external_name":"name","restriction":"String | ::Nil"},{"name":"echo","doc":null,"default_value":"true","external_name":"echo","restriction":""},{"name":"pedantic","doc":null,"default_value":"false","external_name":"pedantic","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(host, port, user, pass, name, echo, pedantic)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"close-instance-method","html_id":"close-instance-method","name":"close","doc":"Close a connection to the NATS server.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.close\n```","summary":"<p>Close a connection to the NATS server.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L347","def":{"name":"close","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @closed\n  return\nend\n@closed = true\n@out.synchronize do\n  flush_outbound\n  @socket.flush\nend\n@socket.close\n@subs.each do |sid, sub|\n  sub.unsubscribe\nend\n@close_cb.try do |cb|\n  spawn(cb.call)\nend\n"}},{"id":"closed?:Bool-instance-method","html_id":"closed?:Bool-instance-method","name":"closed?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Bool","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L42","def":{"name":"closed?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@closed"}},{"id":"flush(timeout=2.second)-instance-method","html_id":"flush(timeout=2.second)-instance-method","name":"flush","doc":"Flush will flush the connection to the server. Can specify a *timeout*.","summary":"<p>Flush will flush the connection to the server.</p>","abstract":false,"args":[{"name":"timeout","doc":null,"default_value":"2.second","external_name":"timeout","restriction":""}],"args_string":"(timeout = <span class=\"n\">2</span>.second)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L229","def":{"name":"flush","args":[{"name":"timeout","doc":null,"default_value":"2.second","external_name":"timeout","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"ch = Channel(Nil).new\n@pongs.push(ch)\n@out.synchronize do\n  @buf.write(PING_SLICE)\nend\nflush_outbound\nspawn do\n  sleep(timeout)\n  ch.close\nend\nbegin\n  ch.receive\nrescue\n  {raise(\"Flush Timeout\")}\nend\n"}},{"id":"max_payload:Int32-instance-method","html_id":"max_payload:Int32-instance-method","name":"max_payload","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Int32","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L43","def":{"name":"max_payload","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@max_payload"}},{"id":"new_inbox-instance-method","html_id":"new_inbox-instance-method","name":"new_inbox","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L238","def":{"name":"new_inbox","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"\"#{@resp_sub_prefix}.#{inbox_token}\""}},{"id":"on_close(&callback)-instance-method","html_id":"on_close(&amp;callback)-instance-method","name":"on_close","doc":"Setup a callback for when the connection closes.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.on_close { puts \"Connection closed!\" }\nnc.close\n```","summary":"<p>Setup a callback for when the connection closes.</p>","abstract":false,"args":[],"args_string":"(&callback)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L369","def":{"name":"on_close","args":[],"double_splat":null,"splat_index":null,"yields":0,"block_arg":{"name":"callback","doc":null,"default_value":"","external_name":"callback","restriction":""},"return_type":"","visibility":"Public","body":"@close_cb = callback"}},{"id":"on_error(&callback:String->)-instance-method","html_id":"on_error(&amp;callback:String-&gt;)-instance-method","name":"on_error","doc":"Setup a callback for an async errors that are received.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.on_error { |e| puts \"Received an error #{e}\" }\n```","summary":"<p>Setup a callback for an async errors that are received.</p>","abstract":false,"args":[],"args_string":"(&callback : String -> )","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L379","def":{"name":"on_error","args":[],"double_splat":null,"splat_index":null,"yields":1,"block_arg":{"name":"callback","doc":null,"default_value":"","external_name":"callback","restriction":"(String -> )"},"return_type":"","visibility":"Public","body":"@err_cb = callback"}},{"id":"publish(subject:String,msg)-instance-method","html_id":"publish(subject:String,msg)-instance-method","name":"publish","doc":"Publishes a messages to a given subject.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.publish(\"foo\", \"Hello!\")\n```","summary":"<p>Publishes a messages to a given subject.</p>","abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"},{"name":"msg","doc":null,"default_value":"","external_name":"msg","restriction":""}],"args_string":"(subject : String, msg)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L164","def":{"name":"publish","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"},{"name":"msg","doc":null,"default_value":"","external_name":"msg","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if subject.empty?\n  raise(\"Bad Subject\")\nend\nif closed?\n  raise(\"Connection Closed\")\nend\ndata = msg.to_slice\ncheck_size(data)\n@out.synchronize do\n  @buf.write(PUB_SLICE)\n  @buf.write(\"#{subject} #{data.size}\".to_slice)\n  @buf.write(CR_LF_SLICE)\n  @buf.write(data)\n  @buf.write(CR_LF_SLICE)\nend\nif @flush.empty?\n  @flush.send(true)\nend\n"}},{"id":"publish(subject:String)-instance-method","html_id":"publish(subject:String)-instance-method","name":"publish","doc":"Publishes an empty message to a given subject.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.publish(\"foo\")\n```","summary":"<p>Publishes an empty message to a given subject.</p>","abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"}],"args_string":"(subject : String)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L188","def":{"name":"publish","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if subject.empty?\n  raise(\"Bad Subject\")\nend\nif closed?\n  raise(\"Connection Closed\")\nend\n@out.synchronize do\n  @buf.write(\"PUB #{subject} 0\\r\\n\\r\\n\".to_slice)\nend\nif @flush.empty?\n  @flush.send(true)\nend\n"}},{"id":"publish_with_reply(subject,reply:String,msg)-instance-method","html_id":"publish_with_reply(subject,reply:String,msg)-instance-method","name":"publish_with_reply","doc":"Publishes a messages to a given subject with a reply subject.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.publish_with_reply(\"foo\", \"reply\", \"Hello!\")\n```","summary":"<p>Publishes a messages to a given subject with a reply subject.</p>","abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":""},{"name":"reply","doc":null,"default_value":"","external_name":"reply","restriction":"String"},{"name":"msg","doc":null,"default_value":"","external_name":"msg","restriction":""}],"args_string":"(subject, reply : String, msg)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L220","def":{"name":"publish_with_reply","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":""},{"name":"reply","doc":null,"default_value":"","external_name":"reply","restriction":"String"},{"name":"msg","doc":null,"default_value":"","external_name":"msg","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if subject.empty?\n  raise(\"Bad Subject\")\nend\nif closed?\n  raise(\"Connection Closed\")\nend\n@out.synchronize do\n  @buf.write(\"PUB #{subject} #{reply} 0\\r\\n\\r\\n\".to_slice)\nend\nif @flush.empty?\n  @flush.send(true)\nend\n"}},{"id":"request(subject:String,msg?,timeout=2.second)-instance-method","html_id":"request(subject:String,msg?,timeout=2.second)-instance-method","name":"request","doc":"Request will send a request to the given subject and wait up to *timeout* for a response.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nanswer = nc.request(\"req\", \"Help!\")\nputs \"Received a response '#{answer}'!\"\n```","summary":"<p>Request will send a request to the given subject and wait up to <em>timeout</em> for a response.</p>","abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"},{"name":"msg?","doc":null,"default_value":"","external_name":"msg?","restriction":""},{"name":"timeout","doc":null,"default_value":"2.second","external_name":"timeout","restriction":""}],"args_string":"(subject : String, msg?, timeout = <span class=\"n\">2</span>.second)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L275","def":{"name":"request","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"},{"name":"msg?","doc":null,"default_value":"","external_name":"msg?","restriction":""},{"name":"timeout","doc":null,"default_value":"2.second","external_name":"timeout","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @resp_sub_created\nelse\n  create_resp_subscription\nend\ntoken = inbox_token\nreply = \"#{@resp_sub_prefix}.#{token}\"\nch = Channel(Msg | ::Nil).new\n@resp_map[token] = ch\npublish_with_reply(subject, reply, msg?)\nspawn do\n  sleep(timeout)\n  ch.close\nend\nbegin\n  msg = ch.receive\nrescue\n  @resp_map.delete(token)\n  raise(\"Request Timeout\")\nend\n"}},{"id":"subscribe(subject,queue:String,&callback:Msg->)-instance-method","html_id":"subscribe(subject,queue:String,&amp;callback:Msg-&gt;)-instance-method","name":"subscribe","doc":"Subscribe to a given subject with the queue group. Will yield to the callback provided with the message received.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.subscribe(\"foo\", \"group1\") { |msg| puts \"Received '#{msg}'\" }\n```","summary":"<p>Subscribe to a given subject with the queue group.</p>","abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":""},{"name":"queue","doc":null,"default_value":"","external_name":"queue","restriction":"String"}],"args_string":"(subject, queue : String, &callback : Msg -> )","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L321","def":{"name":"subscribe","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":""},{"name":"queue","doc":null,"default_value":"","external_name":"queue","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":1,"block_arg":{"name":"callback","doc":null,"default_value":"","external_name":"callback","restriction":"(Msg -> )"},"return_type":"","visibility":"Public","body":"sid = @gsid = @gsid + 1\n@out.synchronize do\n  ((((@buf << \"SUB \") << subject) << \" \") << queue) << \" #{sid}\\r\\n\"\nend\nif @flush.empty?\n  @flush.send(true)\nend\n(Subscription.new(sid, self, callback)).tap do |sub|\n  @subs[sid] = sub\nend\n"}},{"id":"subscribe(subject:String,queue:String?,&callback:Msg->)-instance-method","html_id":"subscribe(subject:String,queue:String?,&amp;callback:Msg-&gt;)-instance-method","name":"subscribe","doc":null,"summary":null,"abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"},{"name":"queue","doc":null,"default_value":"","external_name":"queue","restriction":"String | Nil"}],"args_string":"(subject : String, queue : String?, &callback : Msg -> )","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L330","def":{"name":"subscribe","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"},{"name":"queue","doc":null,"default_value":"","external_name":"queue","restriction":"String | Nil"}],"double_splat":null,"splat_index":null,"yields":1,"block_arg":{"name":"callback","doc":null,"default_value":"","external_name":"callback","restriction":"(Msg -> )"},"return_type":"","visibility":"Public","body":"if queue.is_a?(String)\n  return subscribe(subject, queue, &callback)\nend\nsubscribe(subject, &callback)\n"}},{"id":"subscribe(subject:String,&callback:Msg->)-instance-method","html_id":"subscribe(subject:String,&amp;callback:Msg-&gt;)-instance-method","name":"subscribe","doc":"Subscribe to a given subject. Will yield to the callback provided with the message received.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.subscribe(\"foo\") { |msg| puts \"Received '#{msg}'\" }\n```","summary":"<p>Subscribe to a given subject.</p>","abstract":false,"args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"}],"args_string":"(subject : String, &callback : Msg -> )","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/connection.cr#L306","def":{"name":"subscribe","args":[{"name":"subject","doc":null,"default_value":"","external_name":"subject","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":1,"block_arg":{"name":"callback","doc":null,"default_value":"","external_name":"callback","restriction":"(Msg -> )"},"return_type":"","visibility":"Public","body":"sid = @gsid = @gsid + 1\n@out.synchronize do\n  ((@buf << \"SUB \") << subject) << \" #{sid}\\r\\n\"\nend\nif @flush.empty?\n  @flush.send(true)\nend\n(Subscription.new(sid, self, callback)).tap do |sub|\n  @subs[sid] = sub\nend\n"}}],"macros":[],"types":[]},{"html_id":"github.com/nats-io/nats.cr/NATS/Msg","path":"NATS/Msg.html","kind":"class","full_name":"NATS::Msg","name":"Msg","abstract":false,"superclass":{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/nats-io/nats.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"nats/msg.cr","line_number":27,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/msg.cr"}],"repository_name":"github.com/nats-io/nats.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/nats-io/nats.cr/NATS","kind":"module","full_name":"NATS","name":"NATS"},"doc":"A delivered message from a subscription.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.subscribe(\"foo\") do |msg|\n  puts \"Received '#{msg}'\"\n  puts \"Subject is #{msg.subject}\"\n  puts \"Reply Subject is #{msg.reply}\"\n  puts \"Raw Data is #{msg.data}\"\nend\n```","summary":"<p>A delivered message from a subscription.</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"data:Bytes-instance-method","html_id":"data:Bytes-instance-method","name":"data","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Bytes","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/msg.cr#L32","def":{"name":"data","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bytes","visibility":"Public","body":"@data"}},{"id":"reply:String?-instance-method","html_id":"reply:String?-instance-method","name":"reply","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : String?","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/msg.cr#L31","def":{"name":"reply","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String | ::Nil","visibility":"Public","body":"@reply"}},{"id":"respond(msg)-instance-method","html_id":"respond(msg)-instance-method","name":"respond","doc":"Allows a response to a request message to be easily sent.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nnc.subscribe(\"req\") do |msg|\n  msg.respond(\"ANSWER is 42\")\nend\n```","summary":"<p>Allows a response to a request message to be easily sent.</p>","abstract":false,"args":[{"name":"msg","doc":null,"default_value":"","external_name":"msg","restriction":""}],"args_string":"(msg)","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/msg.cr#L54","def":{"name":"respond","args":[{"name":"msg","doc":null,"default_value":"","external_name":"msg","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @reply.nil?\n  raise(\"No reply subject\")\nend\nif @conn.nil?\n  raise(\"Not a received message\")\nend\n@conn.try(&.publish(@reply.to_s, msg))\n"}},{"id":"subject:String-instance-method","html_id":"subject:String-instance-method","name":"subject","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : String","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/msg.cr#L30","def":{"name":"subject","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"@subject"}}],"macros":[],"types":[]},{"html_id":"github.com/nats-io/nats.cr/NATS/NUID","path":"NATS/NUID.html","kind":"class","full_name":"NATS::NUID","name":"NUID","abstract":false,"superclass":{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/nats-io/nats.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"nats/nuid.cr","line_number":21,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/nuid.cr"}],"repository_name":"github.com/nats-io/nats.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"BASE","name":"BASE","value":"62","doc":null,"summary":null},{"id":"DIGITS","name":"DIGITS","value":"\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\"","doc":null,"summary":null},{"id":"INC","name":"INC","value":"MAX_INC - MIN_INC","doc":null,"summary":null},{"id":"MAX_INC","name":"MAX_INC","value":"333_i64","doc":null,"summary":null},{"id":"MAX_SEQ","name":"MAX_SEQ","value":"839299365868340224_i64","doc":null,"summary":null},{"id":"MIN_INC","name":"MIN_INC","value":"33_i64","doc":null,"summary":null},{"id":"PREFIX_LENGTH","name":"PREFIX_LENGTH","value":"12","doc":null,"summary":null},{"id":"SEQ_LENGTH","name":"SEQ_LENGTH","value":"10","doc":null,"summary":null},{"id":"TOTAL_LENGTH","name":"TOTAL_LENGTH","value":"PREFIX_LENGTH + SEQ_LENGTH","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/nats-io/nats.cr/NATS","kind":"module","full_name":"NATS","name":"NATS"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new-class-method","html_id":"new-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/nuid.cr#L32","def":{"name":"new","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"next-instance-method","html_id":"next-instance-method","name":"next","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/nuid.cr#L38","def":{"name":"next","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@seq = @seq + @inc\nif @seq >= MAX_SEQ\n  reset!\nend\nl = @seq\ns_10 = DIGITS[l % BASE]\ns_09, s_08, s_07, s_06, s_05, s_04, s_03, s_02, s_01 = (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE]), (l = l / BASE\nDIGITS[l % BASE])\n\"#{@prefix}#{s_01}#{s_02}#{s_03}#{s_04}#{s_05}#{s_06}#{s_07}#{s_08}#{s_09}#{s_10}\"\n"}},{"id":"randomize_prefix!-instance-method","html_id":"randomize_prefix!-instance-method","name":"randomize_prefix!","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/nuid.cr#L60","def":{"name":"randomize_prefix!","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@prefix = String::Builder.build(PREFIX_LENGTH) do |io|\n  Random::Secure.random_bytes(@pre_bytes)\n  @pre_bytes.each do |n|\n    io << \"#{DIGITS[n % BASE]}\"\n  end\nend"}}],"macros":[],"types":[]},{"html_id":"github.com/nats-io/nats.cr/NATS/Subscription","path":"NATS/Subscription.html","kind":"class","full_name":"NATS::Subscription","name":"Subscription","abstract":false,"superclass":{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/nats-io/nats.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/nats-io/nats.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"nats/subscription.cr","line_number":24,"url":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/subscription.cr"}],"repository_name":"github.com/nats-io/nats.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/nats-io/nats.cr/NATS","kind":"module","full_name":"NATS","name":"NATS"},"doc":"A subscription to a given subject and possible queue group. Used to unsubscribe/close.\n\n```\nnc = NATS::Connection.new(\"demo.nats.io\")\nsub = nc.subscribe(\"foo\") { |msg| }\nsub.close\nsub.unsubscribe\n```","summary":"<p>A subscription to a given subject and possible queue group.</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"close-instance-method","html_id":"close-instance-method","name":"close","doc":"Will unsubscribe from a subscription.","summary":"<p>Will unsubscribe from a subscription.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/subscription.cr#L39","def":{"name":"close","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"unsubscribe"}},{"id":"closed?-instance-method","html_id":"closed?-instance-method","name":"closed?","doc":"Determines if the subscription is already closed.","summary":"<p>Determines if the subscription is already closed.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/subscription.cr#L44","def":{"name":"closed?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return @msgs.closed?"}},{"id":"unsubscribe-instance-method","html_id":"unsubscribe-instance-method","name":"unsubscribe","doc":"Will unsubscribe from a subscription.","summary":"<p>Will unsubscribe from a subscription.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/nats-io/nats.cr/blob/ff8e1b336e5455c849a3ebea709b39d196a873bd/src/nats/subscription.cr#L31","def":{"name":"unsubscribe","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if closed?\nelse\n  @conn.unsubscribe(@sid)\n  @msgs.close\nend"}}],"macros":[],"types":[]}]}]}})